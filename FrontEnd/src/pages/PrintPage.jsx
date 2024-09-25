import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PrintPage = ({setCapturedPhotos ,savedImage}) => {
  const navigate = useNavigate();
  // const { savedImage } = location.state || {};
  const [timer, setTimer] = useState(6); // 타이머 상태 (6초 후 이동)
  
  useEffect(() => {
    // 1초마다 타이머를 감소시키는 인터벌 설정
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 1) {
          return prevTimer - 1;
        } else {
          // 타이머가 0이 되면 캡쳐된 사진 초기화 및 페이지 이동
          setCapturedPhotos([]); // 캡쳐된 사진을 초기화
          navigate('/'); // 기본 페이지로 이동
          clearInterval(countdown); // 인터벌 정리
          return 0;
        }
      });
    }, 1000); // 1초마다 실행

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(countdown);
  }, [navigate, setCapturedPhotos]);

  return (
    <>
      <div>프린트 중입니다...</div>
      <div>{timer}초 후에 메인 페이지로 이동합니다.</div>
      {savedImage ? (
        <img src={savedImage} alt="Saved preview" />
      ) : (
        <p>저장된 사진이 없습니다.</p>
      )}
    </>
  );
};

export default PrintPage;
