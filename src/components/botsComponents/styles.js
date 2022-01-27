import styled from "styled-components";

export const Content = styled.div`
  margin: -70px 0px 0px 0px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,
    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  border-top: 1px solid rgb(230, 230, 230);
  input {
    border: none;
    height: 40px;
    width: 80%;
    padding: 10px 20px;
    outline: 0;
  }
  button {
    border: none;
    background-color: white;
    width: 18%;
    display: flex;
    justify-content: end;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

export const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  min-height: 400px;
  background: white;
  overflow-y: auto;
  padding: 15px 20px;
  span {
    width: fit-content;
    height: fit-content;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledBotDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    background-color: #9b9b9b;
    color: white;
    padding: 10px;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

export const StyledMeDiv = styled.div`
  margin-left: auto;
  span {
    display: block;
    background-color: #0073a5;
    color: white;
    margin-left: 10px;
    padding: 10px;
  }
`;
