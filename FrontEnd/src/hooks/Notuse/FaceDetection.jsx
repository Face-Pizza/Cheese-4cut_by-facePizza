import React, { useEffect } from "react";
import LoadApiModels from "./LoadApiModels";
// import VideoComponent from "./VideoComponent";
import * as faceapi from "face-api.js";

const FaceDetection = ({ videoRef, onDetections, style }) => {
  useEffect(() => {
    // 얼굴 인식을 설정하는 비동기 함수
    const setupFaceDetection = async () => {
      // 비디오 요소가 준비되지 않은 경우 오류 메시지를 출력하고 함수 종료
      if (!videoRef.current) {
        console.error("FaceDetection: 비디오가 준비되지 않았습니다.");
        return;
      }

      try {
        // 얼굴 인식에 필요한 모델을 로드
        console.log("Loading models...");
        await LoadApiModels();
        console.log("Models loaded successfully.");

        // 비디오가 로드되었을 때 호출되는 함수
        const onVideoLoaded = () => {
          console.log("Video can play.");

          // 비디오의 크기 정보를 가져옴
          const displaySize = {
            width: videoRef.current.videoWidth,
            height: videoRef.current.videoHeight,
          };

          console.log("Video dimensions:", displaySize);

          // 얼굴을 감지하는 함수
          const detectFaces = async () => {
            if (videoRef.current && videoRef.current.readyState === 4) {
              console.log("Running face detection...");
              try {
                // 비디오에서 얼굴과 감정을 감지
                const detections = await faceapi
                  .detectAllFaces(
                    videoRef.current,
                    new faceapi.TinyFaceDetectorOptions()
                  )
                  .withFaceLandmarks()
                  .withFaceExpressions();

                console.log("Detected faces and expressions:", detections);

                // 감지된 얼굴 데이터를 비디오 크기에 맞게 조정
                const resizedDetections = faceapi.resizeResults(
                  detections,
                  displaySize
                );

                // 감지된 얼굴 정보를 부모 컴포넌트로 전달
                if (onDetections) {
                  onDetections(resizedDetections);
                }
              } catch (error) {
                console.error("Error during face detection:", error);
              }
            } else {
              console.log("Video is not ready.");
            }
          };

          // 0.5초마다 얼굴을 감지하는 interval 설정
          const intervalId = setInterval(detectFaces, 500);
          console.log("Interval ID:", intervalId);

          // 컴포넌트가 언마운트될 때 interval을 정리하는 함수 반환
          return () => {
            clearInterval(intervalId);
            console.log("Interval cleared.");
          };
        };

        // 비디오가 준비되었을 때 onVideoLoaded 함수를 호출하도록 설정
        const video = videoRef.current;
        if (video) {
          video.oncanplay = onVideoLoaded;

          // 비디오가 이미 로드된 상태라면 onVideoLoaded를 강제로 호출
          if (video.readyState >= 3) {
            onVideoLoaded();
          }
        }
      } catch (error) {
        console.error("Error가 감지되었습니다(FaceDetection.jsx):", error);
      }
    };

    // 얼굴 인식 설정 함수 호출
    setupFaceDetection();

    // useEffect의 클린업 함수: 컴포넌트가 언마운트될 때 실행
    return () => {
      if (videoRef.current) {
        videoRef.current.oncanplay = null;
      }
    };
  }, [videoRef, onDetections]); // videoRef와 onDetections가 변경될 때 useEffect 재실행

  return (
    <>

    </>
  );
};

export default FaceDetection;
