import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import send from "../images/send.png";
import botIcon from "../images/bot-icon.png";
import Typing from "./Typing";
import MessageWithButton from "./MessageWithButton";
import cuid from "cuid";

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

const end = [
  "Happy end",
  "See you later🙋‍♀️",
  " Peace out🥳",
  " It was nice to see you again🙋‍♀️",
  "Take care",
  "I look forward to our next dialogue",
  "Good bye",
  "Bye bye!👋",
  "Have a nice day",
  "Goodnight",
  "I’m out of here",
  "🥳",
];

const Chat = () => {
  const ref = useRef();

  const [questionNo, setQuestionNo] = useState(
    JSON.parse(localStorage.getItem("bot"))?.questionNo || 0
  );
  const [modelNo, setModelNo] = useState(
    JSON.parse(localStorage.getItem("bot"))?.modelNo ??
      (JSON.parse(localStorage.getItem("doneBefore"))?.flag
        ? Math.floor(Math.random() * 3)
        : 0)
  );

  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages"))?.messages || []
  );

  const [msg, setMsg] = useState({ text: "" });

  const [typing, setTyping] = useState(
    JSON.parse(localStorage.getItem("bot"))?.typing ?? true
  );
  const [botMsg, setBotMsg] = useState(
    JSON.parse(localStorage.getItem("bot"))?.botMsg || {}
  );
  const [currentQuestionType, setCurrentQuestionType] = useState(
    JSON.parse(localStorage.getItem("bot"))?.currentQuestionType || "intro"
  );
  const scrollToBottom = () => {
    ref.current.addEventListener("DOMNodeInserted", (event) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "bot",
      JSON.stringify({
        questionNo,
        currentQuestionType,
        botMsg,
        typing,
        modelNo,
      })
    );
  }, [questionNo, currentQuestionType, botMsg, typing, modelNo]);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify({ messages }));
  }, [messages]);

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
              text: `
              ${feedbackCorrection[
                Math.floor(Math.random() * (feedbackCorrection.length - 1))
              ].replace("{ANSWER}", `<strong>${result}</strong>`)}
              `,
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
          text: message?.text,
          type: message?.type,
          buttons: message?.buttons,
        },
      ]);
      setBotMsg({ message, last });
      if (!last) {
        setQuestionNo(questionNo + 1);
      } else {
        if (
          !JSON.parse(localStorage.getItem("doneBefore"))?.flag &&
          modelNo < 2
        ) {
          setModelNo(modelNo + 1);
          setQuestionNo(0);
        } else if (
          !JSON.parse(localStorage.getItem("doneBefore"))?.flag &&
          modelNo === 2 &&
          botMsg.last
        ) {
          console.log("ELSE IF ");
          localStorage.setItem("doneBefore", JSON.stringify({ flag: true }));
          setMessages([
            ...messages,
            {
              from: "English BOT",
              text: end[Math.floor(Math.random() * (end.length - 1))],
            },
          ]);
          setCurrentQuestionType("end");
        } else {
          console.log("ELSEEE");
          setMessages([
            ...messages,
            {
              from: "English BOT",
              text: end[Math.floor(Math.random() * (end.length - 1))],
            },
          ]);
          setCurrentQuestionType("end");
        }
      }

      setTyping(false);
    });
    scrollToBottom();
  }, [
    messages,
    questionNo,
    msg.text,
    currentQuestionType,
    modelNo,
    botMsg.last,
  ]);

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
          setCurrentQuestionType("model");
          setQuestionNo(0);
          setBotMsg({});
          socket.emit("getModelQuestion", { questionNo, modelNo });
        }
      }, 1000);
    }
    if (currentQuestionType === "model") {
      socket.emit("checkGrammer", { ...msg, _id: botMsg.message._id });
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
        )?.title;

        setMessages([
          ...messages,
          { from: "Me", text: message.title },
          {
            from: "English BOT",
            text: `
            ${feedbackCorrection[
              Math.floor(Math.random() * (feedbackCorrection.length - 1))
            ].replace("{ANSWER}", `<strong>${result}</strong>`)}
            `,
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
      <Content>
        <StyledMessages ref={ref}>
          {messages.map(({ from, text, type, buttons }, index) => (
            <>
              {from === "English BOT" ? (
                <StyledBotDiv key={cuid()}>
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
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `
                    <style>
                    strong{
                      color: #74eaf4;
                    }
                    </style>
                    <div>${text}</div>
                    `,
                      }}
                    ></span>
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
      </Content>
    </>
  );
};

export default Chat;

//styles

const Content = styled.div`
  margin: -70px 0px 0px 0px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,
    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;
  display: flex;
  flex-direction: column;
`;

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
  strong {
    /* display: inline-block; */
    color: #74eaf4;
    margin: 0px 0px 0px 10px;
  }
`;
