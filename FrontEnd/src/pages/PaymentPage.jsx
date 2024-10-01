// src/pages/PaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/commonStyle';
import * as P from '../styles/payStyle';
import Logo_Cheese from '../assets/Logo_Cheese.png';

const PaymentPage = ({ nextURL, setQuantity, quantity }) => {
    const navigate = useNavigate();
    const amount = (2000 * quantity).toLocaleString('ko-KR');


    const Plus = () => {
        if (quantity < 10) {
            setQuantity(quantity + 2)
        }
    }

    const Minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 2)
        }
    }


    const handleStart = () => {
        navigate(nextURL);
    };

    return (
        <P.Payment>
            <S.Logo src={Logo_Cheese} alt='logo' id='Logo_Cheese' />
            <P.ContextBox>
                <h3>프린트 할 사진 수를 선택해 주세요</h3>
                <p id='guide'> 사진은  2 장 단위로 추가됩니다</p>
                <S.CenterRowBox >
                    <button onClick={Minus} style={{ padding: '0 5px' }}> - </button>
                    <h3 id='quantity'> {quantity} </h3>
                    <button onClick={Plus}> + </button>
                </S.CenterRowBox>
            </P.ContextBox>
            <P.Total_Amount_Box>
                <h3>총 금액</h3>
                <h1>{amount} 원</h1>
            </P.Total_Amount_Box>

            <P.Footer>
                <button onClick={() => navigate('/')} id='backBTN'>이전</button>
                <button onClick={handleStart} id='startBTN'>START &gt;</button>
            </P.Footer>
        </P.Payment>
    );
};

export default PaymentPage;









{/* <h3>매수 선택</h3>
        */}