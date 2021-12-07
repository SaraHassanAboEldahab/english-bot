import React, { useState, useContext, useEffect } from "react";
import dataContext from "../contexts/dataContext";
import styled from "styled-components";
import send from "../images/send.png";
import { io } from "socket.io-client";
import botIcon from "../images/bot-icon.png";
import Typing from "./Typing";

const socket = io("wss://english-bot-test.herokuapp.com/");

const Chat = () => {
  const { message } = useContext(dataContext);
  const [messages, setMessages] = useState([]);

  const [msg, setMsg] = useState({ text: "" });
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          { from: "English BOT", text: "👋🏻👋🏻" },
          { from: "English BOT", text: message?.text },
        ]);
        setTyping(false);
      }, 2000);
    }
    socket.on("checkGrammerResult", ({ message, result: checkResult }) => {
      const { result, corrections } = checkResult;
      console.log("<<<<", message);
      console.log("//////", checkResult);
      if (
        corrections?.length === 0 ||
        message.toLowerCase().replace(/\ /g, "") ===
          result?.toLocaleLowerCase().replace(/\ /g, "")
      ) {
        setTyping(false);
        setMessages([
          ...messages,
          { from: "English BOT", text: "u r right ✅ " },
        ]);
        return;
      }
      setTyping(false);
      setMessages([
        ...messages,
        {
          from: "English BOT",
          text: (
            <StyledCorrectDiv>
              <div>
                you are too close , the correct answer is
                <h4>{result}</h4>
              </div>
            </StyledCorrectDiv>
          ),
        },
      ]);
    });
  }, [messages]);

  const sendMsg = (e) => {
    e.preventDefault();
    setMessages([...messages, { from: "Me", text: msg.text }]);
    setTyping(true);
    socket.emit("checkGrammer", msg);
    setMsg({ text: "" });
  };

  return (
    <>
      <StyledMessages>
        {messages.map(({ from, text }, index) => (
          <>
            {from === "English BOT" ? (
              <StyledBotDiv key={index}>
                <img src={botIcon} alt=" " />
                <span>{text}</span>
              </StyledBotDiv>
            ) : (
              <StyledMeDiv key={index}>
                <span>{text}</span>
              </StyledMeDiv>
            )}
          </>
        ))}
      </StyledMessages>
      {typing && <Typing />}
      <StyledDiv onSubmit={(e) => sendMsg(e)}>
        <input
          value={msg.text}
          onChange={(e) => setMsg({ text: e.target.value })}
          type="text"
          placeholder="send a message..."
        />
        <button type="submit">
          <img src={send} alt="" />
        </button>
      </StyledDiv>
    </>
  );
};

export default Chat;

const StyledDiv = styled.form`
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
    height: fit-content;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 10px;
  }
`;

const StyledBotDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    background-color: #717171;
    color: white;
    padding: 10px;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const StyledMeDiv = styled.div`
  margin-left: auto;
  span {
    display: block;
    background-color: #0073a5;
    color: white;
    margin-left: 10px;
    padding: 10px;
  }
`;

const StyledCorrectDiv = styled.div`
  display: flex;
  align-items: center;
  h4 {
    display: inline-block;
    color: #74eaf4;
    margin: 0px 0px 0px 10px;
  }
`;
