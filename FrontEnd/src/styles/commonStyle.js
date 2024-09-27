import styled from 'styled-components';

export const CenterRowBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`

export const LeftRowBox = styled.div`
    display: flex;
    justify-content: left;
`

export const RightRowBox = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const CenterColBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

export const LeftColBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;

    .HomeH3{
      text-align: left;
    }

    .HomeP{
      color: #6D6D6D;
    }

    .illust{
      width: 100%;
    }
`

export const Logo = styled.img`
  width: 198px;
  height: auto;
  margin: 0px 0 0px 0;
  padding: 0 8px;
`

///Home 스타일
export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 130px;
`

export const HomeContainer = styled.div`
  display: flex;
  gap : 38px;
  height: 560px;
  width: 100%;
  padding: 0 148px;
  

  button{
    display: flex;
    width: 50%;
    background-color: #F4F4F4;
    padding: 30px 50px;
  }

  #descrip{
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    margin: 10px 0 0px 0;
  }
  button:focus,
  button:focus-visible {
  box-shadow: 0px 4.253px 31.898px 0px rgba(0, 0, 0, 0.25);
  background-color: #FFFAEA;
}
h3{
    margin: 0;
}
p{
    text-align: left;
    margin: 0px;
}
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 90px;
  padding: 0 60px;

  button{
    background: none;
    text-align: center;
    font-size: 43.2px;
    padding: 0;
    margin: 0px;
    width: 90px;
    height: 90px;
   }
  #nextBTN{
    font-size: 40px; }
  button:hover{
    color: #FFC500; }   
`