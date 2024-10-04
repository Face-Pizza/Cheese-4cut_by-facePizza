import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import * as M from '../../styles/modalStyle';

const Modal = ({ modalVisible, setModalVisible }) => {
    const location = useLocation()
    const [timer, setTimer] = useState(4);
    const [text, setText] = useState({ sub: '', description: '' }); // 

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => clearTimeout(countdown);
        } else {
            setModalVisible(false)
        }
    }, [timer]);

    const getDescription = (pathname) => {
        switch (pathname) {
            case '/shoot_1':
                return { sub: '목표 표정이 인식되면,', description: '바로 사진이 촬영돼요!' };
            case '/shoot_2':
                return { sub: '10초가 지나면,', description : '인식된 표정 텍스트와 함께 사진이 찍혀요!' };
        }
    };

    useEffect(() => {
        const updatedText = getDescription(location.pathname);
        setText(updatedText);
    }, [location.pathname]);

    return (
        <>
            {modalVisible && (
                <M.ModalBackground>
                    <M.Modal>
                        <p>{text.sub}</p>
                        <h1 id='desc'>{text.description}</h1>
                    </M.Modal>
                    <div>
                        <h1 id='timer'>{timer}</h1>
                    </div>
                </M.ModalBackground>
            )}
        </>
    )
};

export default Modal;