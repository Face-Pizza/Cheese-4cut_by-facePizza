import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Pr from '../styles/printStyle';
import Cartoon1 from '../assets/cartoon/Catoon_1.png';
import Cartoon2 from '../assets/cartoon/Catoon_2.png';
import Cartoon3 from '../assets/cartoon/Catoon_3.png';
import Cartoon4 from '../assets/cartoon/Catoon_4.png';

const PrintPage = ({setCapturedPhotos, imgForPrint}) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(300); // 타이머 상태 (20초 후 이동)
  const cartoons = [Cartoon1, Cartoon2, Cartoon3, Cartoon4]; // 카툰 이미지 배열
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 카툰 인덱스
  
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

  useEffect(() => {
    // 5초마다 카툰 이미지 변경
    const changeCartoon = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cartoons.length); // 인덱스를 순환시킴
    }, 5000); // 5초마다 실행

    return () => clearInterval(changeCartoon); // 컴포넌트 언마운트 시 타이머 정리
  }, [cartoons.length]);

  return (
    <Pr.PrintPage>
      <h1>프린트 중입니다...</h1>
      <h3>{timer}초 후에 메인 페이지로 이동합니다.</h3>
      {imgForPrint ? (
                <img src={imgForPrint} alt="To be printed" />
            ) : (
                <p>이미지가 없습니다.</p>
            )}
      <Pr.Cartoon src={cartoons[currentImageIndex]} />
    </Pr.PrintPage>
  );
};

export default PrintPage;
