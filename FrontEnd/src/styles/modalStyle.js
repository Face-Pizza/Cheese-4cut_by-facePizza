import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* 배경을 불투명하게 처리 */
  z-index: 1000;

  #timer{
    color: #FFF;
    font-size: 150px;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 30px 50px;
  font-size: 20px;
  background-color: #646464;

  p{
    margin: 0 0 30px 0;
    font-size: 70px;
    color: #fff;
  }
  #desc{
    font-size: 100px;
    color: #fff;
    margin: 0;
  };


`;
