import styled from "styled-components";
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
background: #eee;
height: 100%;
align-items: center;
font-family: Helvetica, sans-serif;
h3 {
  align-self: flex-start;
  margin-left: 20px;
  color: #999;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
  margin-top: 10px;
}
`
export const List = styled.div`
background: white;
border-radius: 5px;
box-shadow: 3px 3px 15px rgb(0 0 0 / 0.5);
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
`

export const Fechamento = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 95%;
border: 1px solid #ccc;
margin-top: 20px;
border-radius: 3px;
padding: 10px 0;
font-size: 14px;
line-height: 17px;

.valoresFechamento {
  text-align: right;
}

div {
  display: flex;
  flex-direction: column;
  p {
    margin: 4.5px 15px;
    
  }
  .laranja {
    color: #ff7800;
  }
  .bold {
    font-weight: bold;
    margin-top: 12px;
  }
}
`
export const botaoPagamento = styled.button`
width: 95%;
font-size: 20px;
color: white;
background-color: #ff6c00;
box-shadow: 3px 3px 15px rgb(#d45a00 / 0.5);
border-radius: 3px;
margin-top: 20px;
padding: 18px 1px;
font-weight: bold;
border: none;
margin-bottom: 20px;
`

