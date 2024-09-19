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