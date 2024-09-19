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

export const CenterColBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LeftColBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
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
  padding: 30px 130px;
`

export const HomeContainer = styled.div`
  display: flex;
  gap : 38px;
  height: 560px;

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
  justify-content: flex-end;
  align-items: center;
  gap: 90px;
  padding: 0 60px;

  h3{
    display: flex;
    background-color: #E5E5E5;
    border-radius: 90px;
    width: 90px;
    height: 90px;
    justify-content: center;
    align-items: center;
  }

  button{
    background-color: white;
    text-align: center;
    font-size: 43.2px;
    padding: 0;
    margin: 0px;
    width: 90px;
    height: 90px;
   }
  #startBTN{
    font-size: 40px; }
  #startBTN:hover{
    color: #FFC500; }   
`