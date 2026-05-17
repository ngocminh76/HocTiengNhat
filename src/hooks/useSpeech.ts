// src/hooks/useSpeech.ts
// Dùng Google Translate TTS API + Web Speech API fallback
// Hỗ trợ phát từ phím tắt (keyboard user gesture)

import { useCallback, useRef } from 'react';

/**
 * Phát audio bằng Web Speech API (offline, giọng robot nhưng ổn định)
 */
function speakWithWebSpeech(text: string, rate: number, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }
  // Cancel bất kỳ utterance nào đang phát
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ja-JP';
  utter.rate = rate;
  // Tìm giọng Nhật nếu có
  const voices = window.speechSynthesis.getVoices();
  const jaVoice = voices.find(v => v.lang.startsWith('ja'));
  if (jaVoice) utter.voice = jaVoice;
  
  utter.onend = () => onEnd?.();
  utter.onerror = () => onEnd?.();
  
  window.speechSynthesis.speak(utter);
}

export function useSpeech() {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  // Track xem Google TTS có hoạt động không, nếu fail liên tục thì chuyển hẳn sang Web Speech
  const googleTtsWorking = useRef(true);
  const playIdRef = useRef(0);

  /** Phát âm một đoạn text tiếng Nhật */
  const speak = useCallback((text: string, rate = 0.85): Promise<void> => {
    return new Promise((resolve) => {
      const myPlayId = ++playIdRef.current;
      const finish = () => {
        if (myPlayId === playIdRef.current) resolve();
      };

      // Ngắt audio đang chạy (nếu có)
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.removeAttribute('src');
        currentAudioRef.current.load();
        currentAudioRef.current = null;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      // Nếu Google TTS đã bị đánh dấu fail → dùng thẳng Web Speech
      if (!googleTtsWorking.current) {
        speakWithWebSpeech(text, rate, finish);
        return;
      }

      // Thử Google TTS trước (giọng tự nhiên hơn)
      const tryGoogleTTS = () => {
        if (myPlayId !== playIdRef.current) return;
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${encodeURIComponent(text)}`;
        playAudioUrl(url, () => tryYoudaoTTS());
      };

      const tryYoudaoTTS = () => {
        if (myPlayId !== playIdRef.current) return;
        const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=jap`;
        playAudioUrl(url, () => {
          if (myPlayId !== playIdRef.current) return;
          googleTtsWorking.current = false;
          speakWithWebSpeech(text, rate, finish);
        });
      };

      const playAudioUrl = (url: string, onFail: () => void) => {
        if (myPlayId !== playIdRef.current) return;
        let isFailed = false;
        try {
          const audio = new Audio(url);
          audio.playbackRate = rate;
          currentAudioRef.current = audio;

          const triggerFail = () => {
            if (isFailed) return;
            isFailed = true;
            audio.pause();
            audio.removeAttribute('src');
            audio.load();
            if (myPlayId === playIdRef.current) onFail();
          };

          const timeout = setTimeout(() => {
            if (myPlayId !== playIdRef.current) return;
            if (audio.readyState === 0) {
              triggerFail();
            }
          }, 2000);

          audio.addEventListener('canplaythrough', () => clearTimeout(timeout), { once: true });
          audio.addEventListener('ended', finish, { once: true });

          audio.addEventListener('error', () => {
            clearTimeout(timeout);
            triggerFail();
          }, { once: true });

          const playPromise = audio.play();
          if (playPromise) {
            playPromise.catch(() => {
              clearTimeout(timeout);
              triggerFail();
            });
          }
        } catch {
          if (!isFailed) {
            isFailed = true;
            if (myPlayId === playIdRef.current) onFail();
          }
        }
      };

      if (!googleTtsWorking.current) {
        tryYoudaoTTS();
      } else {
        tryGoogleTTS();
      }
    });
  }, []);

  const stop = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return { speak, stop, supported: true };
}
