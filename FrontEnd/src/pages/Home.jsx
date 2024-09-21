// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/commonStyle';
import Logo_Cheese from '../assets/Logo_Cheese.png';
import Example_Img from '../assets/Example_Img.png';

const Home = ({ setCutCount, setQuantity, quantity }) => {
  const navigate = useNavigate();

  const Plus = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  const Minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  const handleNext = () => {
    navigate('/pay');
  };

  return (
    <S.Home>
      <S.Logo src={Logo_Cheese} alt='logo' id='Logo_Cheese' />
      <h3>사진 유형을 선택해주세요</h3>

      <S.HomeContainer>
        <button onClick={() => { setCutCount(1); }}>
          <S.LeftColBox>
            <div id='descrip'>
              <h3>표정 챌린지 네컷</h3>
              <p>목표 표정이 인식되면 사진이 찍혀요!</p>
            </div>
            <img src={Example_Img} />
          </S.LeftColBox>
        </button>

        <button onClick={() => { setCutCount(2); }}>
          <S.LeftColBox>
            <div id='descrip'>
              <h3>내맘대로 표정 네컷</h3>
              <p>지금 내 표정을 실시간 인식해서 텍스트로 표기해요</p>
            </div>
            <img src={Example_Img} />
          </S.LeftColBox>
        </button>
      </S.HomeContainer>

      <S.Footer>
        <button onClick={handleNext} id='nextBTN'>다음 &gt;</button>
      </S.Footer>
    </S.Home>
  );
};

export default Home;
