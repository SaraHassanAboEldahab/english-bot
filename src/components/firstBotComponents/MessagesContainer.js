import React, { useEffect, useRef } from "react";
import botIcon from "../../images/bot-icon.png";
import MessageWithButton from "../shared/MessageWithButton";
import cuid from "cuid";
import { StyledMessages, StyledBotDiv, StyledMeDiv } from "../shared/styles";
import {
  socket,
  feedbackCorrection,
  feedbackRight,
  endMessages,
} from "../shared/const";

const MessagesContainer = ({
  questionNo,
  currentQuestionType,
  botMsg,
  modelNo,
  messages,
  setTyping,
  setQuestionNo,
  setMessages,
  setBotMsg,
  setModelNo,
  setCurrentQuestionType,
}) => {
  const ref = useRef();

  const scrollToBottom = () => {
    ref?.current?.addEventListener("DOMNodeInserted", (event) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    });
  };

  useEffect(() => {
    localStorage.setItem("messages1", JSON.stringify({ messages }));
    if (messages?.[messages.length - 1]?.from === "English BOT") {
      const audio = new Audio(
        "https://english-bot-test.herokuapp.com/assets/elegant-notification-sound.mp3"
      );
      audio.play();
    }
    scrollToBottom();
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
        setTimeout(() => {
          if (!botMsg.last) {
            socket.emit("getModelQuestion", { questionNo, modelNo });
          } else {
            socket.emit("getEndQuestion", {});
          }
          setTyping(false);
        }, 4000);
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
          !JSON.parse(localStorage.getItem("doneBefore1"))?.flag &&
          modelNo < 2
        ) {
          setModelNo(modelNo + 1);
          setBotMsg({ ...botMsg, last: false });
          setQuestionNo(0);
        } else if (
          !JSON.parse(localStorage.getItem("doneBefore1"))?.flag &&
          modelNo === 2 &&
          botMsg.last
        ) {
          localStorage.setItem("doneBefore1", JSON.stringify({ flag: true }));
          setMessages([
            ...messages,
            {
              from: "English BOT",
              text: endMessages[
                Math.floor(Math.random() * (endMessages.length - 1))
              ],
            },
          ]);
          setCurrentQuestionType("end");
          setTyping(false);
        } else {
          setMessages([
            ...messages,
            {
              from: "English BOT",
              text: endMessages[
                Math.floor(Math.random() * (endMessages.length - 1))
              ],
            },
          ]);
          setCurrentQuestionType("end");
        }
      }

      setTyping(false);
    });
  }, [
    messages,
    questionNo,
    currentQuestionType,
    modelNo,
    botMsg.last,
    botMsg,
    setMessages,
    setTyping,
    setBotMsg,
    setQuestionNo,
    setModelNo,
    setCurrentQuestionType,
  ]);

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
    }, 2000);
  };

  return (
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
  );
};

export default MessagesContainer;
