import React, { useState } from "react";
import styled from "styled-components";
import send from "../images/send.png";

const Chat = () => {
  const [messages, setMessages] = useState([{ id: "456", text: "👋👋" }]);
  const [msg, setMsg] = useState("");
  console.log(messages);
  const sendMsg = () => {
    setMessages([...messages, { id: "123", text: msg }]);
    setMsg("");
  };
  return (
    <>
      <StyledMessages>
        {messages.map((msg) => (
          <span key={msg.id}>{msg.text}</span>
        ))}
      </StyledMessages>
      <StyledDiv>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="send a message..."
        />
        <button onClick={sendMsg}>
          <img src={send} alt="" />
        </button>
      </StyledDiv>
    </>
  );
};

export default Chat;

const StyledDiv = styled.div`
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

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  min-height: 400px;
  background: white;
  overflow-y: auto;
  padding: 15px 20px;
  span {
    width: fit-content;
    padding: 10px;
    background-color: beige;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 10px;
  }
`;
