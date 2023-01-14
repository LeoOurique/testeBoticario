import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
color: #CCC;
font-weight: 700;
justify-items: center;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
font-size: 13px;
line-height: 16px;
width: 100%;
font-family: Helvetica Neue, sans-serif;

p {
  margin: 12px 17px;
}
.destaque {
  color: #ff7800;
}

@media screen and (min-device-width: 1024px) {
height: 80px;
font-size: 25px;
align-items: center;

p {
  margin: 30px;
}
}
`