import styled from "styled-components";
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
text-align: left;

input {
  width: 90%;
  margin-top: 0;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

label {
  align-self: start;
  margin-top: 12px;
  margin-bottom: 5px;
  font-family: Helvetica, sans-serif;
}

.validadecvv {
  display: flex;
  flex-direction: row;
  
  input {
    width: 80%;
  }

  .labelinput {
    display: flex;
    flex-direction: column;
  }
}
`