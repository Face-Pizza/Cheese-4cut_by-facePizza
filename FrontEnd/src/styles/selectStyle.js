import styled, { keyframes, css } from 'styled-components';

export const SelectionPage = styled.div`
#photo_gallery{
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 200px);
}
`

export const FourFrame = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: black;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 400px);
  grid-auto-flow: row dense;
  padding: 37px 37px 137px 37px;
  row-gap: 18px;
  column-gap: 18px;
  /* border: 1px solid red; */

  transform: scale(0.65); /* 전체 크기를 절반으로 줄임 */
  transform-origin: top center;


  div{
    position: relative;
  }
`

export const Frame = styled.img`
  position: absolute;
  z-index: 2;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const EachPhoto = styled.div`
  position: relative;
  z-index: 1;

  background-color: white;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 101%;
    height: 101%;
    object-fit: cover;
  }
`;

export const PhotoToggleBtn = styled.button`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;

  width: 300px;
  height: 400px;
  background-color: transparent;
  cursor: pointer;
  /* border: 1px solid blue; */
`


export const FrameChoice = styled.button`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 2px 10px;
  margin: 0 5px;
  /* border: ${(props) => (props.isSelected ? '2px solid blue' : 'none')}; */
  background-color: ${(props) => (props.isSelected ? '#610B38' : 'white')};
  color: ${(props) => (props.isSelected ? '#FFFFFF' : 'black')};
  
  &:hover{
    transform: scale(1.03);
    transition: 0.2s;
  }

&:active{
  background-color: #610B38;
  color: #FFFFFF;
}
`

export const PhotoWrapper = styled.div`
  position: relative;
  height: auto;
  border: 3px solid transparent;

  ${({ isSelected }) => isSelected && css`
    box-shadow: 0 0 0 2px #2E2E2E;
    border-radius: 4px;
  `}
`;

export const EmptyPhoto = styled.div`
    width: 100%;
    height: 100%;
    background-color: ddd;
`