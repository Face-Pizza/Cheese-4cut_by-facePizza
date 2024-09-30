// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/commonStyle';
import Logo_Cheese from '../assets/Logo_Cheese.png';
import Left_illust from '../assets/Home_illust_1.png';
import right_illust from '../assets/Home_illust_2.png';

const Home = ({ nextURL, setNextURL }) => {
  const navigate = useNavigate();


  const handleNext = () => {
    navigate('/pay');
  };

  return (
    <S.Home>
      <S.Logo src={Logo_Cheese} alt='logo' id='Logo_Cheese' />
      <h3>사진 유형을 선택해주세요</h3>

      <S.HomeContainer>
        <button onClick={() => { setNextURL('/shoot_1'); }}>
          <S.LeftColBox style={{ height: '100%' }}>
            <div id='descrip'>
              <h3 class='HomeH3'>표정 챌린지 </h3>
              <p class='HomeP'>목표 표정이 인식되면 자동으로 사진이 찍혀요</p>
            </div>
            <S.CenterColBox>
              <img class='illust' src={Left_illust} />
            </S.CenterColBox>
          </S.LeftColBox>
        </button>

        <button onClick={() => { setNextURL('/shoot_2'); }}>
          <S.LeftColBox style={{ height: '100%', }}>
            <div id='descrip'>
              <h3 class='HomeH3'>지내표 (지금 내 표정은?)</h3>
              <p class='HomeP'>지금 내 표정을 텍스트로 인식해서 보여줘요</p>
            </div>
            <S.CenterColBox>
              <img class='illust' src={right_illust} />
            </S.CenterColBox>
          </S.LeftColBox>
        </button>
      </S.HomeContainer>

      <S.Footer>
        <button
          onClick={handleNext}
          disabled={!nextURL}
          id='nextBTN'
        >
          다음 &gt;
        </button>
      </S.Footer>
    </S.Home>
  );
};

export default Home;
