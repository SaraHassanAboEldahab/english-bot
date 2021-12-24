import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import send from "../images/send.png";
import { io } from "socket.io-client";
import botIcon from "../images/bot-icon.png";
import Typing from "./Typing";
import MessageWithButton from "./MessageWithButton";

const socket = io("wss://english-bot-test.herokuapp.com/");

// eslint-disable-next-line no-sparse-arrays
const feedbackCorrection = [
  "You are too close , but the write answer is {ANSWER}",
  "The correct answer is {ANSWER}",
  "{ANSWER} this is the correct",
  " Oh sorry , the write answer is {ANSWER}",
];

const feedbackRight = [
  "You are right 🤩",
  "you are too good",
  "great 👏",
  "Nice 😁😁",
  "You are right ✅ ",
];

const Chat = () => {
  const ref = useRef();

  const [questionNo, setQuestionNo] = useState(0);
  const [modelNo, setModelNo] = useState(Math.floor(Math.random() * 3));
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState({ text: "" });
  const [typing, setTyping] = useState(true);
  const [botMsg, setBotMsg] = useState({});
  const [currentQuestionType, setCurrentQuestionType] = useState("intro");

  const scrollToBottom = () => {
    ref.current.addEventListener("DOMNodeInserted", (event) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    });
  };

  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        socket.emit("getIntroQuestion", { questionNo });
        socket.on("responseIntroQuestion", ({ message, last }) => {
          setMessages([
            ...messages,
            { from: "English BOT", text: message.text },
          ]);
          if (!last) {
            setQuestionNo(questionNo + 1);
          }
          setTyping(false);
        });
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (currentQuestionType === "model") {
      socket.off("checkGrammerResult");
      socket.on("checkGrammerResult", ({ message, result: checkResult }) => {
        const { result, corrections } = checkResult;
        if (
          corrections?.length === 0 ||
          message?.toLowerCase().replace(/\ /g, "") ===
            result?.toLocaleLowerCase().replace(/\ /g, "")
        ) {
          setTyping(false);
          setMessages([
            ...messages,
            {
              from: "English BOT",
              text: feedbackRight[
                Math.floor(Math.random() * (feedbackRight.length - 1))
              ],
              type: message?.type,
              buttons: message?.buttons,
            },
          ]);
        } else {
          setTyping(false);
          setMessages([
            ...messages,
            {
              from: "English BOT",
              text: (
                <StyledCorrectDiv>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div>
                ${feedbackCorrection[
                  Math.floor(Math.random() * (feedbackCorrection.length - 1))
                ].replace("{ANSWER}", `<h4>${result}</h4>`)}
                </div>`,
                    }}
                  ></div>
                </StyledCorrectDiv>
              ),
              type: message?.type,
              buttons: message?.buttons,
            },
          ]);
        }
        if (!botMsg.last) {
          socket.emit("getModelQuestion", { questionNo, modelNo });
        } else {
          socket.emit("getEndQuestion", {});
        }
      });
    }

    setCurrentQuestionType(currentQuestionType);

    // close the older listener then open new one
    socket.off("responseIntroQuestion");
    socket.off("responseModelQuestion");

    socket.on("responseIntroQuestion", ({ message, last }) => {
      setMessages([
        ...messages,
        {
          from: "English BOT",
          text: message.text,
          type: message?.type,
          buttons: message?.buttons,
        },
      ]);
      setBotMsg({ message, last });
      if (!last) {
        setQuestionNo(questionNo + 1);
      }
      setTyping(false);
    });

    socket.on("responseModelQuestion", ({ message, last }) => {
      setMessages([
        ...messages,
        {
          from: "English BOT",
          text: message.text,
          type: message?.type,
          buttons: message?.buttons,
        },
      ]);
      console.log(message);
      setBotMsg({ message, last });
      if (!last) {
        setQuestionNo(questionNo + 1);
      }
      setTyping(false);
    });

    scrollToBottom();
  }, [messages, questionNo, msg.text, currentQuestionType]);

  const sendMsgSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { from: "Me", text: msg.text }]);
    setTyping(true);
    if (
      botMsg?.message?.response?.length > 0 &&
      currentQuestionType === "intro"
    ) {
      setTimeout(() => {
        const response =
          botMsg.message.response[
            Math.floor(Math.random() * (botMsg.message.response.length - 1))
          ];
        setMessages([
          ...messages,
          { from: "Me", text: msg.text },
          { from: "English BOT", text: response },
        ]);
        if (!botMsg.last) {
          setTyping(true);
          socket.emit("getIntroQuestion", { questionNo });
        } else {
          setQuestionNo(0);
          socket.emit("getModelQuestion", { questionNo, modelNo });
          setBotMsg({});
          setCurrentQuestionType("model");
        }
      }, 1000);
    }
    if (currentQuestionType === "model") {
      socket.emit("checkGrammer", msg);
      setBotMsg({});
    }
    setMsg({ text: "" });
  };

  const onBtnClick = (message) => {
    setMessages([...messages, { from: "Me", text: message.title }]);
    setTimeout(() => {
      setTyping(false);
      if (message.correct === true) {
        setMessages([
          ...messages,
          { from: "Me", text: message.title },
          {
            from: "English BOT",
            text: feedbackRight[
              Math.floor(Math.random() * (feedbackRight.length - 1))
            ],
            type: message?.type,
            buttons: message?.buttons,
          },
        ]);
      } else {
        const result = botMsg.message.buttons.find(
          (btn) => btn.correct === true
        ).title;
        console.log(":::::::", botMsg.message);
        setMessages([
          ...messages,
          { from: "Me", text: message.title },
          {
            from: "English BOT",
            text: (
              <StyledCorrectDiv>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<div>
              ${feedbackCorrection[
                Math.floor(Math.random() * (feedbackCorrection.length - 1))
              ].replace("{ANSWER}", `<h4>${result}</h4>`)}
              </div>`,
                  }}
                ></div>
              </StyledCorrectDiv>
            ),
            type: message?.type,
            buttons: message?.buttons,
          },
        ]);
      }
      if (!botMsg.last) {
        socket.emit("getModelQuestion", { questionNo, modelNo });
      } else {
        socket.emit("getEndQuestion", {});
      }
    }, 1000);
  };

  return (
    <>
      <StyledMessages ref={ref}>
        {messages.map(({ from, text, type, buttons }, index) => (
          <>
            {from === "English BOT" ? (
              <StyledBotDiv key={index}>
                <img src={botIcon} alt=" " />

                {type === "@message-type/button" ? (
                  <MessageWithButton
                    buttons={buttons}
                    text={text}
                    setMessages={setMessages}
                    messages={messages}
                    socket={socket}
                    onBtnClick={onBtnClick}
                  />
                ) : (
                  <span>{text}</span>
                )}
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
      <StyledDiv onSubmit={(e) => sendMsgSubmit(e)}>
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
