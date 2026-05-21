// src/App.tsx
// State machine router — không dùng react-router để giữ đơn giản
import { useState, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { QuizPage } from './pages/QuizPage';
import { ResultPage } from './pages/ResultPage';
import { KanjiListPage } from './pages/KanjiListPage';
import { GuidePage } from './pages/GuidePage';
import { PlanPage } from './pages/PlanPage';
import { GrammarPage } from './pages/GrammarPage';
import { ExercisePage } from './pages/ExercisePage';
import { ReadingSelectPage } from './pages/ReadingSelectPage';
import { ParticleExercise } from './pages/exercises/ParticleExercise';
import { KatakanaPage } from './pages/KatakanaPage';
import { KatakanaExercisePage } from './pages/KatakanaExercisePage';
import { NihongoPage } from './pages/NihongoPage';
import { NihongoLessonPage } from './pages/NihongoLessonPage';
import { ListeningPracticePage } from './pages/ListeningPracticePage';
import { DokkaiReviewPage } from './pages/DokkaiReviewPage';
import { JlptTestListPage } from './pages/JlptTestListPage';
import { JlptTestPage } from './pages/JlptTestPage';
import { NIHONGO_LESSONS } from './data/nihongo-lessons';
import { JLPT_TESTS } from './data/jlpt-tests';
import { useProgress } from './hooks/useProgress';
import { KANJI_N5, buildOptions, buildVocabOptions } from './data/kanji-n5';
import { GRAMMAR_N5 } from './data/grammar-n5';
import { READING_N5 } from './data/reading-n5';
import type { Screen, KanjiItem, QuizQuestion } from './types';

// XP popup floating element
function XpPopup({ amount }: { amount: number }) {
  return <div className="xp-float">+{amount} XP</div>;
}

export default function App() {
  const { progress, addXP, markLearned, markWeak, clearWeak, bumpStreak, logSession, updateDeepStage, resetAll, markGrammarLearned, markNihongoLessonCompleted, updateSentenceMastery, incrementLessonReviewCount } = useProgress();
  const [screen, setScreen]   = useState<Screen>({ name: 'home' });
  const [xpPopup, setXpPopup] = useState(0);

  // Track session start time cho durationMin
  const sessionStart = useRef<number>(Date.now());

  const showXP = useCallback((amount: number) => {
    setXpPopup(amount);
    setTimeout(() => setXpPopup(0), 1500);
  }, []);

  // ── Home ──────────────────────────────────────────
  const goHome = useCallback(() => setScreen({ name: 'home' }), []);

  // ── Learn ─────────────────────────────────────────
  const startLearn = useCallback((queue: KanjiItem[]) => {
    sessionStart.current = Date.now();
    setScreen({ name: 'learn', queue });
  }, []);

  const handleCardDone = useCallback((id: number) => {
    markLearned(id);
    addXP(5);
    showXP(5);
  }, [markLearned, addXP, showXP]);

  const handleLearnComplete = useCallback((queue: KanjiItem[]) => {
    const durationMin = Math.round((Date.now() - sessionStart.current) / 60000);
    logSession({
      type: 'learn',
      xp: queue.length * 5,
      kanjiCount: queue.length,
      durationMin: Math.max(durationMin, 1),
    });
    setScreen({ name: 'learn-complete', queue });
  }, [logSession]);

  // ── Quiz builder ──────────────────────────────────
  const buildQuiz = useCallback((pool: KanjiItem[]): QuizQuestion[] => {
    const optionPool = KANJI_N5.length >= 4 ? KANJI_N5 : pool;
    const qs: QuizQuestion[] = [];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    shuffled.forEach((k) => {
      qs.push({
        type: 'meaning',
        kanji: k,
        options: buildOptions(k, 'meaning', optionPool),
        answer: k.meaning,
        subtitle: 'Chọn nghĩa đúng của Kanji này:',
      });
      if (optionPool.length >= 4) {
        qs.push({
          type: 'on',
          kanji: k,
          options: buildOptions(k, 'on', optionPool),
          answer: k.on,
          subtitle: 'Chọn âm On (音読み) đúng:',
        });
      }
      if (optionPool.length >= 2) {
        k.vocab.forEach(v => {
          qs.push({
            type: 'vocab',
            kanji: k,
            options: buildVocabOptions(v.word, v.reading, optionPool),
            answer: v.reading,
            subtitle: `Chọn cách đọc đúng cho từ:  ${v.word}  (${v.meaning})`,
          });
        });
      }
    });

    return qs.sort(() => Math.random() - 0.5).slice(0, 20); // JLPT style cần làm 20 câu để test
  }, []);

  const startReview = useCallback(() => {
    const pool = progress.weakIds.length > 0
      ? KANJI_N5.filter((k) => progress.weakIds.includes(k.id))
      : KANJI_N5.filter((k) => progress.learnedIds.includes(k.id));
    if (pool.length === 0) return alert('Chưa có Kanji để ôn! Hãy học bài mới trước.');
    sessionStart.current = Date.now();
    setScreen({ name: 'quiz', questions: buildQuiz(pool) });
  }, [progress.weakIds, progress.learnedIds, buildQuiz]);

  const startQuizFromLearn = useCallback((queue: KanjiItem[]) => {
    sessionStart.current = Date.now();
    // Generate 20 câu CHỈ TỪ queue (đợt học hiện tại) để học viên tập trung nhớ sâu
    setScreen({ name: 'quiz', questions: buildQuiz(queue) });
  }, [buildQuiz]);

  // ── Quiz per-question callback ────────────────────
  const handleQuizAnswer = useCallback((correct: boolean, kanjiId: number) => {
    if (correct) {
      addXP(10);
      showXP(10);
      clearWeak(kanjiId);
    } else {
      markWeak(kanjiId);
    }
  }, [addXP, showXP, clearWeak, markWeak]);

  const handleQuizFinish = useCallback((score: number, total: number, xpGained: number) => {
    bumpStreak();
    const durationMin = Math.round((Date.now() - sessionStart.current) / 60000);
    logSession({
      type: 'quiz',
      xp: xpGained,
      kanjiCount: 0,
      quizScore: score,
      quizTotal: total,
      durationMin: Math.max(durationMin, 1),
    });
    setScreen({ name: 'result', score, total, xpGained });
  }, [bumpStreak, logSession]);

  // ── Exercise ──────────────────────────────────────
  const goExercise = useCallback(() => {
    sessionStart.current = Date.now();
    setScreen({ name: 'exercise' });
  }, []);

  const startExerciseFromLearn = useCallback((queue: KanjiItem[]) => {
    sessionStart.current = Date.now();
    setScreen({ name: 'exercise', queue });
  }, []);

  const handleExerciseLog = useCallback((score: number, total: number) => {
    const durationMin = Math.round((Date.now() - sessionStart.current) / 60000);
    const xpGained = score * 8;
    addXP(xpGained);
    showXP(xpGained);
    logSession({
      type: 'exercise',
      xp: xpGained,
      kanjiCount: 0,
      quizScore: score,
      quizTotal: total,
      durationMin: Math.max(durationMin, 1),
    });
  }, [addXP, showXP, logSession]);

  // ── List, Guide, Plan ────────────────────────────
  const goList  = useCallback(() => setScreen({ name: 'list' }), []);
  const goGuide = useCallback(() => setScreen({ name: 'guide' }), []);
  const goPlan  = useCallback(() => setScreen({ name: 'plan' }), []);
  const goGrammar = useCallback(() => setScreen({ name: 'grammar' }), []);
  const goReading = useCallback(() => setScreen({ name: 'reading' }), []);
  const goParticles = useCallback(() => setScreen({ name: 'particles' }), []);
  const goKatakana    = useCallback(() => setScreen({ name: 'katakana' }), []);
  const goKatakanaEx  = useCallback(() => setScreen({ name: 'katakana-ex' }), []);
  const goNihongo     = useCallback(() => setScreen({ name: 'nihongo' }), []);
  const goListening   = useCallback(() => setScreen({ name: 'listening' }), []);
  const goJlptTestList = useCallback(() => setScreen({ name: 'jlpt-test-list' }), []);

  // ── Render ────────────────────────────────────────
  const learnedPool = KANJI_N5.filter(k => progress.learnedIds.includes(k.id));

  const renderScreen = () => {
    switch (screen.name) {
      case 'home':
        return <HomePage progress={progress} onStartLearn={startLearn}
          onStartReview={startReview} onShowList={goList} 
          onShowGuide={goGuide} onShowPlan={goPlan}
          onShowGrammar={goGrammar} onShowExercise={goExercise}
          onShowReading={goReading} onShowParticles={goParticles}
          onShowKatakana={goKatakana} onShowNihongo={goNihongo}
          onShowListening={goListening}
          onShowJlptTestList={goJlptTestList} />;

      case 'learn':
        return <LearnPage queue={screen.queue} onCardDone={handleCardDone}
          onComplete={handleLearnComplete} onHome={goHome} />;

      case 'learn-complete':
        return (
          <div className="result-screen screen">
            <div style={{ fontSize: 72 }}>🎉</div>
            <h2>Học xong {screen.queue.length} Kanji!</h2>
            <p>Bây giờ làm quiz để ghi nhớ sâu hơn nhé</p>
            <div className="result-stats">
              <div className="r-stat"><div className="num">{screen.queue.length}</div><div className="lbl">Kanji mới</div></div>
              <div className="r-stat"><div className="num">+{screen.queue.length * 5}</div><div className="lbl">XP kiếm được</div></div>
            </div>
            <div className="btn-row">
              <button className="btn btn-primary" onClick={() => startExerciseFromLearn(screen.queue)}>
                🧩 Bắt Đầu 5 Bài Luyện Tập Liên Tiếp
              </button>
            </div>
          </div>
        );

      case 'quiz':
        return <QuizPage questions={screen.questions} on답Done={handleQuizAnswer}
          onFinish={handleQuizFinish} onHome={goHome} />;

      case 'result':
        return <ResultPage score={screen.score} total={screen.total} xpGained={screen.xpGained}
          weakCount={progress.weakIds.length}
          onReview={startReview} onLearnMore={() => startLearn(
            KANJI_N5.filter((k) => !progress.learnedIds.includes(k.id)).slice(0, 5)
          )}
          onHome={goHome} />;

      case 'list':
        return <KanjiListPage progress={progress}
          onSelect={(k: KanjiItem) => startLearn([k])} 
          onReviewSet={(queue: KanjiItem[]) => {
            sessionStart.current = Date.now();
            setScreen({ name: 'exercise', queue });
          }}
          onHome={goHome} />;

      case 'guide':
        return <GuidePage onHome={goHome} />;

      case 'plan':
        return <PlanPage progress={progress} onHome={goHome} />;
        
      case 'grammar':
        return <GrammarPage data={GRAMMAR_N5} progress={progress} onMarkLearned={markGrammarLearned} onHome={goHome} onShowReading={goReading} />;

      case 'reading':
        return <ReadingSelectPage passages={READING_N5} progress={progress} onHome={goHome} />;

      case 'particles':
        return <ParticleExercise onHome={goHome} />;

      case 'katakana':
        return <KatakanaPage onHome={goHome} onStartExercise={goKatakanaEx} />;

      case 'katakana-ex':
        return <KatakanaExercisePage onHome={goKatakana} />;

      case 'nihongo':
        return <NihongoPage onHome={goHome} mastery={progress.nihongoMastery || {}} sentenceMastery={progress.sentenceMastery || {}} onSelectLesson={(ids) => setScreen({ name: 'nihongo-lesson', lessonIds: ids })} onShowDokkaiReview={(id) => setScreen({ name: 'dokkai-review', reviewId: id })} />;

      case 'nihongo-lesson': {
        const ids = screen.name === 'nihongo-lesson' ? (screen.lessonIds || [screen.lessonId as number].filter(Boolean)) : [];
        const lessons = NIHONGO_LESSONS.filter(l => ids.includes(l.id));
        if (lessons.length === 0) return <NihongoPage onHome={goHome} mastery={progress.nihongoMastery || {}} sentenceMastery={progress.sentenceMastery || {}} onSelectLesson={(ids) => setScreen({ name: 'nihongo-lesson', lessonIds: ids })} onShowDokkaiReview={(id) => setScreen({ name: 'dokkai-review', reviewId: id })} />;
        return <NihongoLessonPage lessons={lessons} onHome={goNihongo} onLessonComplete={(id) => { markNihongoLessonCompleted(id); incrementLessonReviewCount(id); }} sentenceMastery={progress.sentenceMastery || {}} updateSentenceMastery={(key, type) => { updateSentenceMastery(key, type); addXP(5); showXP(5); }} addXP={(amount) => { addXP(amount); showXP(amount); }} />;
      }

      case 'listening':
        return <ListeningPracticePage onHome={goHome} />;

      case 'dokkai-review':
        return <DokkaiReviewPage reviewId={screen.reviewId} onHome={goNihongo} addXP={(amount) => { addXP(amount); showXP(amount); }} />;

      case 'jlpt-test-list':
        return <JlptTestListPage progress={progress} onGenerateTest={(t) => setScreen({ name: 'jlpt-test', testData: t })} onHome={goHome} />;

      case 'jlpt-test':
        {
          const test = screen.name === 'jlpt-test' ? screen.testData : null;
          if (!test) return <div className="screen"><p>Test not found.</p><button className="btn btn-ghost" onClick={goJlptTestList}>Back</button></div>;
          return <JlptTestPage test={test} onHome={goHome} onBack={goJlptTestList} />;
        }

      case 'exercise':
        // Nếu mode exercise được gọi kèm queue (sau khi học 5 từ), dùng queue đó. Nếu không dùng toàn bộ đã học.
        return <ExercisePage pool={screen.queue || learnedPool} 
          onStartDeepQuiz={startQuizFromLearn}
          progress={progress}
          onUpdateStage={(stage: number) => {
            const currentQueue = screen.queue || learnedPool;
            if (currentQueue.length > 5) return; // Chế độ Luyện Tập Cuốn Chiếu không lưu vết
            updateDeepStage(currentQueue[0]?.id || 0, stage);
          }}
          onHome={goHome} onLogSession={handleExerciseLog} />;
    }
  };

  return (
    <div className="app">
      <Header progress={progress} onReset={resetAll} />
      {xpPopup > 0 && <XpPopup amount={xpPopup} />}
      {renderScreen()}
    </div>
  );
}
