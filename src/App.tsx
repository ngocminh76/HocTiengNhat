// src/App.tsx
import { useCallback, useRef, useState, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
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
import { CheckpointDashboardPage } from './pages/CheckpointDashboardPage';
import { DokkaiReviewPage } from './pages/DokkaiReviewPage';
import { JlptTestListPage } from './pages/JlptTestListPage';
import { JlptTestPage } from './pages/JlptTestPage';
import { NIHONGO_LESSONS } from './data/nihongo-lessons';
import { useProgress } from './hooks/useProgress';
import { KANJI_N5, buildOptions, buildVocabOptions } from './data/kanji-n5';
import { GRAMMAR_N5 } from './data/grammar-n5';
import { READING_N5 } from './data/reading-n5';
import type { KanjiItem, QuizQuestion } from './types';

// XP popup floating element
function XpPopup({ amount }: { amount: number }) {
  return <div className="xp-float">+{amount} XP</div>;
}

export default function App() {
  const {
    progress,
    addXP,
    markLearned,
    markWeak,
    clearWeak,
    bumpStreak,
    logSession,
    updateDeepStage,
    resetAll,
    markGrammarLearned,
    markNihongoLessonCompleted,
    updateSentenceMastery,
    incrementLessonReviewCount,
    updateCheckpointMastery,
  } = useProgress();

  const navigate = useNavigate();
  const [xpPopup, setXpPopup] = useState(0);

  // Track session start time cho durationMin
  const sessionStart = useRef<number>(Date.now());

  const showXP = useCallback((amount: number) => {
    setXpPopup(amount);
    setTimeout(() => setXpPopup(0), 1500);
  }, []);

  // ── Learn ─────────────────────────────────────────
  const startLearn = useCallback((queue: KanjiItem[]) => {
    sessionStart.current = Date.now();
    navigate('/kanji/learn', { state: { queue } });
  }, [navigate]);

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
    navigate('/kanji/learn-complete', { state: { queue } });
  }, [logSession, navigate]);

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
    navigate('/quiz', { state: { questions: buildQuiz(pool) } });
  }, [progress.weakIds, progress.learnedIds, buildQuiz, navigate]);

  const startQuizFromLearn = useCallback((queue: KanjiItem[]) => {
    sessionStart.current = Date.now();
    navigate('/quiz', { state: { questions: buildQuiz(queue) } });
  }, [buildQuiz, navigate]);

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
    navigate('/result', { state: { score, total, xpGained } });
  }, [bumpStreak, logSession, navigate]);

  // ── Exercise ──────────────────────────────────────
  const startExerciseFromLearn = useCallback((queue: KanjiItem[]) => {
    sessionStart.current = Date.now();
    navigate('/exercise', { state: { queue } });
  }, [navigate]);

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

  const goHome = useCallback(() => navigate('/'), [navigate]);
  const goKatakana = useCallback(() => navigate('/katakana'), [navigate]);
  const goNihongo = useCallback(() => navigate('/nihongo'), [navigate]);
  const goJlptTestList = useCallback(() => navigate('/jlpt'), [navigate]);

  const learnedPool = useMemo(() => KANJI_N5.filter(k => progress.learnedIds.includes(k.id)), [progress.learnedIds]);

  // ── Route Wrappers ────────────────────────────────
  const LearnRoute = () => {
    const location = useLocation();
    const queue = location.state?.queue || [];
    if (queue.length === 0) return <Navigate to="/kanji" replace />;
    return <LearnPage queue={queue} onCardDone={handleCardDone} onComplete={handleLearnComplete} onHome={goHome} />;
  };

  const LearnCompleteRoute = () => {
    const location = useLocation();
    const queue = location.state?.queue || [];
    if (queue.length === 0) return <Navigate to="/kanji" replace />;
    return (
      <div className="result-screen screen">
        <div style={{ fontSize: 72 }}>🎉</div>
        <h2>Học xong {queue.length} Kanji!</h2>
        <p>Bây giờ làm quiz để ghi nhớ sâu hơn nhé</p>
        <div className="result-stats">
          <div className="r-stat"><div className="num">{queue.length}</div><div className="lbl">Kanji mới</div></div>
          <div className="r-stat"><div className="num">+{queue.length * 5}</div><div className="lbl">XP kiếm được</div></div>
        </div>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => startExerciseFromLearn(queue)}>
            🧩 Bắt Đầu 5 Bài Luyện Tập Liên Tiếp
          </button>
        </div>
      </div>
    );
  };

  const QuizRoute = () => {
    const location = useLocation();
    const questions = location.state?.questions || [];
    if (questions.length === 0) return <Navigate to="/" replace />;
    return <QuizPage questions={questions} on답Done={handleQuizAnswer} onFinish={handleQuizFinish} onHome={goHome} />;
  };

  const ResultRoute = () => {
    const location = useLocation();
    const { score, total, xpGained } = location.state || { score: 0, total: 0, xpGained: 0 };
    return (
      <ResultPage
        score={score}
        total={total}
        xpGained={xpGained}
        weakCount={progress.weakIds.length}
        onReview={startReview}
        onLearnMore={() => startLearn(
          KANJI_N5.filter((k) => !progress.learnedIds.includes(k.id)).slice(0, 5)
        )}
        onHome={goHome}
      />
    );
  };

  const ExerciseRoute = () => {
    const location = useLocation();
    const queue = location.state?.queue || learnedPool;
    return (
      <ExercisePage
        pool={queue}
        onStartDeepQuiz={startQuizFromLearn}
        progress={progress}
        onUpdateStage={(stage: number) => {
          if (queue.length > 5) return;
          updateDeepStage(queue[0]?.id || 0, stage);
        }}
        onHome={goHome}
        onLogSession={handleExerciseLog}
      />
    );
  };

  const NihongoLessonRoute = () => {
    const { lessonIds } = useParams();
    const ids = useMemo(() => (lessonIds || '').split(',').map(Number).filter(Boolean), [lessonIds]);
    const lessons = useMemo(() => NIHONGO_LESSONS.filter(l => ids.includes(l.id)), [ids]);

    if (lessons.length === 0) return <Navigate to="/nihongo" replace />;

    return (
      <NihongoLessonPage
        lessons={lessons}
        onHome={goNihongo}
        onLessonComplete={(id) => {
          markNihongoLessonCompleted(id);
          incrementLessonReviewCount(id);
        }}
        sentenceMastery={progress.sentenceMastery || {}}
        updateSentenceMastery={(key, type) => {
          updateSentenceMastery(key, type);
          addXP(5);
          showXP(5);
        }}
        addXP={(amount) => {
          addXP(amount);
          showXP(amount);
        }}
      />
    );
  };

  const CheckpointRoute = () => {
    const { checkpointId } = useParams();
    return (
      <CheckpointDashboardPage
        checkpointId={checkpointId || ''}
        checkpointMastery={progress.checkpointMastery || {}}
        onHome={goNihongo}
        onSelectTest={(testId) => navigate(`/dokkai/${testId}`, { state: { checkpointId } })}
      />
    );
  };

  const DokkaiReviewRoute = () => {
    const { reviewId } = useParams();
    const location = useLocation();
    const checkpointId = location.state?.checkpointId;

    return (
      <DokkaiReviewPage
        reviewId={reviewId || ''}
        onHome={() => checkpointId ? navigate(`/checkpoint/${checkpointId}`) : navigate('/nihongo')}
        addXP={(amount) => {
          addXP(amount);
          showXP(amount);
        }}
        onComplete={(isPassed, score) => updateCheckpointMastery(reviewId || '', isPassed, score)}
      />
    );
  };

  const JlptTestRoute = () => {
    const location = useLocation();
    const testData = location.state?.testData;
    if (!testData) return <Navigate to="/jlpt" replace />;
    return <JlptTestPage test={testData} onHome={goHome} onBack={jlptTestListBack} />;
  };

  const jlptTestListBack = useCallback(() => navigate('/jlpt'), [navigate]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header progress={progress} onReset={resetAll} />
        {xpPopup > 0 && <XpPopup amount={xpPopup} />}
        <div className="content-area">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  progress={progress}
                  onStartLearn={startLearn}
                  onStartReview={startReview}
                  onShowList={() => navigate('/kanji')}
                  onShowGuide={() => navigate('/guide')}
                  onShowPlan={() => navigate('/plan')}
                  onShowGrammar={() => navigate('/grammar')}
                  onShowExercise={() => navigate('/exercise')}
                  onShowReading={() => navigate('/reading')}
                  onShowParticles={() => navigate('/particles')}
                  onShowKatakana={() => navigate('/katakana')}
                  onShowNihongo={goNihongo}
                  onShowListening={() => navigate('/listening')}
                  onShowJlptTestList={goJlptTestList}
                />
              }
            />
            <Route
              path="/kanji"
              element={
                <KanjiListPage
                  progress={progress}
                  onSelect={(k) => startLearn([k])}
                  onReviewSet={(queue) => navigate('/exercise', { state: { queue } })}
                  onHome={goHome}
                />
              }
            />
            <Route path="/kanji/learn" element={<LearnRoute />} />
            <Route path="/kanji/learn-complete" element={<LearnCompleteRoute />} />
            <Route path="/quiz" element={<QuizRoute />} />
            <Route path="/result" element={<ResultRoute />} />
            <Route path="/exercise" element={<ExerciseRoute />} />
            <Route path="/guide" element={<GuidePage onHome={goHome} />} />
            <Route path="/plan" element={<PlanPage progress={progress} onHome={goHome} />} />
            <Route
              path="/grammar"
              element={
                <GrammarPage
                  data={GRAMMAR_N5}
                  progress={progress}
                  onMarkLearned={markGrammarLearned}
                  onHome={goHome}
                  onShowReading={() => navigate('/reading')}
                />
              }
            />
            <Route path="/reading" element={<ReadingSelectPage passages={READING_N5} progress={progress} onHome={goHome} />} />
            <Route path="/particles" element={<ParticleExercise onHome={goHome} />} />
            <Route path="/katakana" element={<KatakanaPage onHome={goHome} onStartExercise={() => navigate('/katakana/exercise')} />} />
            <Route path="/katakana/exercise" element={<KatakanaExercisePage onHome={goKatakana} />} />
            <Route
              path="/nihongo"
              element={
                <NihongoPage
                  onHome={goHome}
                  mastery={progress.nihongoMastery || {}}
                  sentenceMastery={progress.sentenceMastery || {}}
                  checkpointMastery={progress.checkpointMastery || {}}
                  onSelectLesson={(ids) => navigate(`/nihongo/lessons/${ids.join(',')}`)}
                  onShowDokkaiReview={(id) => navigate(`/checkpoint/${id}`)}
                />
              }
            />
            <Route path="/nihongo/lessons/:lessonIds" element={<NihongoLessonRoute />} />
            <Route path="/listening" element={<ListeningPracticePage onHome={goHome} />} />
            <Route path="/checkpoint/:checkpointId" element={<CheckpointRoute />} />
            <Route path="/dokkai/:reviewId" element={<DokkaiReviewRoute />} />
            <Route
              path="/jlpt"
              element={
                <JlptTestListPage
                  progress={progress}
                  onGenerateTest={(t) => navigate('/jlpt/test', { state: { testData: t } })}
                  onHome={goHome}
                />
              }
            />
            <Route path="/jlpt/test" element={<JlptTestRoute />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
