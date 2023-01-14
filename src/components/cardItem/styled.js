import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: row;
width: 90%;
border: 1px solid #eee;
margin: auto;
border-radius: 3px;
font-family: Helvetica, sans-serif;
color: black;
font-size: 13px;
line-height: 16px;
margin: 12px;

@media screen and (min-device-width: 1024px) {
  font-size: 17px;
  font-weight: 500;
}
`

export const ImageBox = styled.div`
width: 25%;
align-items: center;
display: flex;
margin: 5px;

img {
  width: 100%;
  margin: 0;
}
`

export const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 75%;
text-align: left;
padding: 0;
p {
  margin: 10px 0px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: clip;
  
}
.Valor {
  align-self: end;
  margin: 10px 14px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}
`