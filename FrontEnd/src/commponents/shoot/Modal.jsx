import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import * as M from '../../styles/modalStyle';

const Modal = () => {
    const location = useLocation()
    const [modalVisible, setModalVisible] = useState(true);
    const [timer, setTimer] = useState(4);
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => {
                setTimer(timer -1);
            }, 1000);

            return () =>  clearTimeout(countdown);
        } else {
            setModalVisible(false)
        }
    }, [timer]);

    const getDescription = (pathname) => {
        switch (pathname) {
            case '/shoot_1':
                return '목표 표정 인식 되면 바로 사진이 촬영돼요!';
            case '/shoot_2' :
                return '인식된 표정 텍스트와 함께 사진이 찍혀요!';
        }
    };

    useEffect(() => {
        const updatedText = getDescription(location.pathname);
        setDescription(updatedText);
    }, [location.pathname]);

    return (
        <>
         {modalVisible && (
            <M.ModalBackground>
                <M.Modal>
                    {description}
                    <br/>
                    {timer}
                </M.Modal>
            </M.ModalBackground>
         )}
        </>
    )
};

export default Modal;