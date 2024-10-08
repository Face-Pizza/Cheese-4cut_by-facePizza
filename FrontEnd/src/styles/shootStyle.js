import styled, { keyframes, css } from 'styled-components';

const flashAnimation = keyframes`
  0% { background-color: transparent; }
  50% { background-color: rgba(255, 255, 255, 0.7); }
  100% { background-color: transparent; }
`;

// 깜빡이는 오버레이를 위한 styled div
export const FlashOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 93%;
  border-radius: 30px;
  pointer-events: none;
  z-index: 1000;
  ${props => props.flash && css`
    animation: ${flashAnimation} 0.2s;
  `}
  `;

export const ShootPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    #targetEx{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30.168px;
      background: #FFC700;
      width: 542.1px;
      height: 75.4px;
      color: white;
      margin: 15px 0 10px 0;
    }

  #yourEx{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;

    border-radius: 30px;
    background: #999;
    width: 542.1px;
    height: 75.4px;
    color: white;
    margin: 0;
    }
  `

export const ShootPage2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`

export const LeftDatabox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 95px;
    width: 500px;

    #sec{
      font-size: 70px;
      margin: 0;
    }

    #sequence
    {
      font-size: 60px;
      color: #818181;
      margin: 0;
    }

    
  `

export const RightDatabox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 25px;
width: 500px;

#tip{
  color: var(--, #000);
  font-family: "omyu pretty";
  font-size: 33px;

  margin: 0;

 }
`

export const CharactImg = styled.img`
  width: 300px;
`

export const CurrentH1 = styled.h1`
  display: flex;
  justify-content: center;
  background-color: transparent;
  background: none;
  align-items: center;
  font-size: 100px;
  margin: 0;
  color: black;

  position: absolute;
  z-index: 2;
  top: 50px;
`