import React, { useEffect } from 'react';

const EmotionCaptureHandler = ({ translatedEmotion, targetEmotion, timer, setTimer, capturePhoto, modalVisible }) => {

  useEffect(() => {
    // 타이머 감소 로직
    if (!modalVisible && timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(countdown); // 타이머 정리
    }
  }, [timer, setTimer, modalVisible]); // 타이머 감소와 관련된 의존성만 포함

  useEffect(() => {
    // 감정이 목표 감정과 일치하거나 타이머가 0이 될 때 사진을 촬영
    console.log(`translatedEmotion: ${translatedEmotion}, targetEmotion: ${targetEmotion}, timer: ${timer}`);
    if (!modalVisible && (translatedEmotion === targetEmotion || timer === 0)) {
      capturePhoto();
      setTimer(0);
      setTimeout(() => {
        setTimer(10); // 타이머를 10초로 초기화
      }, 2000);
    }
  }, [translatedEmotion, targetEmotion, timer, capturePhoto, setTimer]);

  return null;
};

export default EmotionCaptureHandler;
