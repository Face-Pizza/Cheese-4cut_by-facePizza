import styled, { keyframes, css } from 'styled-components';

export const SelectionPage = styled.div`
  display: flex;
  width: 100%;
  height: 99vh;


#photo_gallery{
    display: grid;
    grid-template-columns: repeat(4, 216px);
    grid-template-rows: repeat(2, 288px);
    row-gap: 34px;
    column-gap: 34px;

    margin: 42px 0;
}

  #Preview{ 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  } 
`

export const PhotoWrapper = styled.div`
  position: relative;
  height: auto;

  ${({ isSelected }) => isSelected && css`
    box-shadow: 0 0 0 2px  #FFC700;
    border-radius: 4px;
    border: 3px solid #FFC700;

  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  padding: 15px 30px;
  
  span{
    font-size: 28px;
  }
  input{
    zoom: 1.7;
  }
  label{
    margin-bottom: 10px;
  }
  `

export const Left_box = styled.div`
 display: flex;
 flex-direction: column;
 width: 42%;
 height: 100%;

 align-items: center;
`

export const Right_box = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 58%;
 background-color: #F4F4F4;
 height: 99vh;

 h3{
  margin: 0;
 }
`

export const FourFrame = styled.div`
  position: relative;
  display: grid;

  justify-content: center;
  align-content: center;
  background-color: black;
  grid-template-columns: repeat(2, 195px);
  grid-template-rows: repeat(2, 260px);
  grid-auto-flow: row dense;
  padding: 24px 24px 86px 24px;
  row-gap: 11px;
  column-gap: 11px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);



  div{
    position: relative;
  }

  #canvas{
  width: 0;
  height: 0; 
  position: absolute;
  border: 10px solid blue;
  }
`

export const Frame = styled.img`
  position: absolute;
  width: 449.7px;
  z-index: 2;
`

export const Photo_Preview = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
`

export const EachPhoto = styled.div`
  position: relative;
  z-index: 1;

  background-color: white;
  width: 195px;
  height: 260px;
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

  width: 195px;
  height: 260px;
  background-color: transparent;
  cursor: pointer;
  /* border: 1px solid blue; */
`



export const EmptyPhoto = styled.div`
    width: 100%;
    height: 100%;
    background-color: #939393;
`

//FrameSelectop
export const FrameSelectorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const FrameChoice = styled.div`
    padding: 10px;
    cursor: pointer;
    border: 2px solid ${({ isSelected }) => (isSelected ? 'blue' : 'transparent')};
    background-color: ${({ isSelected }) => (isSelected ? '#f0f8ff' : 'transparent')};

    img {
        width: 80px;
        height: 80px;
    }

    &:hover {
        border-color: gray;
    }
`;

// export const FrameChoice = styled.button`
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border-radius: 20px;
//   padding: 2px 10px;
//   margin: 0 5px;
//   /* border: ${(props) => (props.isSelected ? '2px solid blue' : 'none')}; */
//   background-color: ${(props) => (props.isSelected ? '#610B38' : 'white')};
//   color: ${(props) => (props.isSelected ? '#FFFFFF' : 'black')};
  
//   &:hover{
//     transform: scale(1.03);
//     transition: 0.2s;
//   }

// &:active{
//   background-color: #610B38;
//   color: #FFFFFF;
// }
// `