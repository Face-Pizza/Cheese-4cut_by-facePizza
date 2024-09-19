// src/pages/PaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/commonStyle';
import * as P from '../styles/payStyle';
import Logo_Cheese from '../assets/Logo_Cheese.png';
import Example_Img from '../assets/Example_Img.png';

const PaymentPage = ({ setCutCount, setQuantity, quantity }) => {
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


    const handleStart = () => {
        navigate('/shoot');
    };

    return (
        <S.Home>
            <S.Logo src={Logo_Cheese} alt='logo' id='Logo_Cheese' />
            <P.ContextBox>
                <h3>프린트 할 사진 수를 선택해 주세요</h3>
                <p id='guide'> 사진은 두 장 단위로 추가됩니다</p>
                <S.CenterRowBox >
                    <button onClick={Minus} style={{ padding: '0 5px' }}> - </button>
                    <h3 id='quantity'> {quantity} </h3>
                    <button onClick={Plus}> + </button>
                </S.CenterRowBox>
            </P.ContextBox>


            <P.Footer>
                <button onClick={() => navigate('/')} id='backBTN'>이전</button>
                <button onClick={handleStart} id='startBTN'>START &gt;</button>
            </P.Footer>
        </S.Home>
    );
};

export default PaymentPage;









{/* <h3>매수 선택</h3>
        */}