import React, { useState, useEffect } from "react";
import FaceDetection from "./FaceDetection";

// FaceExpression 컴포넌트: 얼굴 인식을 통해 감정을 분석하는 역할
const FaceExpression = ({ videoRef, onExpressions }) => {
  const [detections, setDetections] = useState(false); // 얼굴이 감지되었는지 여부
  const [expressions, setExpressions] = useState({ maxKey: "start", maxValue: 0 }); // 감정 데이터를 저장
  const [faceDetectionKey, setFaceDetectionKey] = useState(Date.now()); // FaceDetection 컴포넌트의 고유 key

  // 컴포넌트가 처음 로드될 때 실행되는 로직
  useEffect(() => {
    console.log('FaceExpression 컴포넌트 로드 완료.');
    setFaceDetectionKey(Date.now()); // 컴포넌트가 로드될 때마다 새로운 key를 설정하여 FaceDetection을 새로고침
  }, []); // 빈 배열을 의존성으로 설정하여 처음에 한 번만 실행

  // 감정이 감지되었을 때 실행되는 로직
  useEffect(() => {
    console.log('Detections or expressions changed:', { detections, expressions });
    // 얼굴이 감지되고 비디오가 존재할 때 감정 상태를 부모 컴포넌트로 전달
    if (detections && videoRef.current) {
      setExpressions(expressions);
      if (onExpressions) {
        onExpressions(expressions); // 부모 컴포넌트에 감정 데이터를 전달
      }
    }
  }, [detections, expressions, onExpressions]); // 감정과 감지 상태가 변경될 때마다 실행

  // 얼굴 감지 및 감정 분석 결과를 처리하는 함수
  const handleDetections = (resizedDetections) => {
    try {
      console.log('Handle detections called.');
      resizedDetections.forEach((detection) => {
        const expressions = detection.expressions; // 감지된 감정 데이터
        // 감정 중 가장 높은 값을 가진 감정을 찾음
        const [maxKey, maxValue] = Object.entries(expressions).reduce(
          (acc, [key, value]) => (value > acc[1] ? [key, value] : acc),
          [null, -Infinity] // 초기 값은 [null, -Infinity]로 설정
        );
        
        // 가장 강하게 감지된 감정을 faceExpression에 저장
        const faceExpression = { maxKey, maxValue };

        // 감정의 확률이 0.5 이상이면 감정이 감지되었다고 판단
        if (maxValue > 0.5) {
          setDetections(true); // 감정이 감지되었음을 true로 설정
          setExpressions(faceExpression); // 감정 상태를 업데이트
        } else {
          setDetections(false); // 감정이 충분히 강하지 않으면 false로 설정
        }
      });
    } catch (error) {
      console.error('Error in handleDetections:', error); // 오류 발생 시 로그 출력
    }
  };

  return (
    <>
      {/* FaceDetection 컴포넌트: 비디오에서 얼굴을 감지하고 handleDetections로 결과를 전달 */}
      <FaceDetection key={faceDetectionKey} videoRef={videoRef} onDetections={handleDetections} />
    </>
  );
};

export default FaceExpression;
