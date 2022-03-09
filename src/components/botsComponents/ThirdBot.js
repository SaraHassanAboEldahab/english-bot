import React, { useState, useEffect, useRef } from "react";
import send from "../../images/send.png";
import botIcon from "../../images/bot-icon.png";
import Typing from "../Typing";
import MessageWithButton from "../MessageWithButton";
import cuid from "cuid";
import {
  Content,
  StyledForm,
  StyledMessages,
  StyledBotDiv,
  StyledMeDiv,
} from "./styles";
import {
  socket,
  feedbackCorrection,
  feedbackRight,
  endMessages,
  retry,
  after_retry,
} from "./const";

const ThirdBot = ({ setActive }) => {
  const ref = useRef();

  const [times, setTimes] = useState(0);
  const [questionNo, setQuestionNo] = useState(
    JSON.parse(localStorage.getItem("bot3"))?.questionNo || 0
  );
  const [modelNo, setModelNo] = useState(
    JSON.parse(localStorage.getItem("bot3"))?.modelNo ??
      (JSON.parse(localStorage.getItem("doneBefore3"))?.flag
        ? Math.floor(Math.random() * 3)
        : 0)
  );

  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages3"))?.messages || []
  );

  const [msg, setMsg] = useState({ text: "" });

  const [typing, setTyping] = useState(
    JSON.parse(localStorage.getItem("bot3"))?.typing ?? true
  );
  const [botMsg, setBotMsg] = useState(
    JSON.parse(localStorage.getItem("bot3"))?.botMsg || {}
  );
  const [currentQuestionType, setCurrentQuestionType] = useState(
    JSON.parse(localStorage.getItem("bot3"))?.currentQuestionType || "intro"
  );
  const scrollToBottom = () => {
    ref?.current?.addEventListener("DOMNodeInserted", (event) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "bot3",
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
    localStorage.setItem("messages3", JSON.stringify({ messages }));
    if (messages?.[messages.length - 1]?.from === "English BOT") {
      const audio = new Audio(
        "https://english-bot-test.herokuapp.com/assets/elegant-notification-sound.mp3"
      );
      audio.play();
    }
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setActive(true);
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
          if (!botMsg.last) {
            socket.emit("getModelQuestion", { questionNo, modelNo });
          } else {
            socket.emit("getEndQuestion", {});
          }
        } else {
          setTimes(times + 1);
          if (times >= 0 && times < 3) {
            setMessages([
              ...messages,
              {
                from: "English BOT",
                text: retry[Math.floor(Math.random() * (retry.length - 1))],
                type: message?.type,
                buttons: message?.buttons,
              },
            ]);
          } else if (times === 3) {
            setMessages([
              ...messages,
              {
                from: "English BOT",
                text: after_retry[
                  Math.floor(Math.random() * (after_retry.length - 1))
                ],
                type: message?.type,
                buttons: message?.buttons,
              },
            ]);
          } else {
            setTimes(0);
            setMessages([
              ...messages,
              {
                from: "English BOT",
                text: `
                    ${feedbackCorrection[
                      Math.floor(
                        Math.random() * (feedbackCorrection.length - 1)
                      )
                    ].replace("{ANSWER}", `<strong>${result}</strong>`)}
                    `,
                type: message?.type,
                buttons: message?.buttons,
              },
            ]);
            setTimeout(() => {
              if (!botMsg.last) {
                socket.emit("getModelQuestion", { questionNo, modelNo });
              } else {
                socket.emit("getEndQuestion", {});
              }
              setTyping(false);
            }, 4000);
          }
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
          !JSON.parse(localStorage.getItem("doneBefore3"))?.flag &&
          modelNo < 2
        ) {
          setModelNo(modelNo + 1);
          setBotMsg({ ...botMsg, last: false });
          setQuestionNo(0);
        } else if (
          !JSON.parse(localStorage.getItem("doneBefore3"))?.flag &&
          modelNo === 2 &&
          botMsg.last
        ) {
          localStorage.setItem("doneBefore3", JSON.stringify({ flag: true }));
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
    times,
    botMsg,
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
      socket.emit("checkGrammer", { ...msg, _id: botMsg?.message?._id });
      // setBotMsg({});
    }
    setMsg({ text: "" });
  };

  const onBtnClick = (message) => {
    let _messages = [...messages, { from: "Me", text: message.title }];
    // setTimeout(() => {
    setTyping(false);
    if (message.correct === true) {
      setMessages([
        ..._messages,
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
      if (!botMsg.last) {
        socket.emit("getModelQuestion", { questionNo, modelNo });
      } else {
        socket.emit("getEndQuestion", {});
      }
    } else {
      setTimes(times + 1);
      setTyping(false);
      if (times >= 0 && times < 3) {
        setMessages([
          ..._messages,
          {
            from: "English BOT",
            text: retry[Math.floor(Math.random() * (retry.length - 1))],
            type: message?.type,
            buttons: message?.buttons,
          },
        ]);
      } else if (times === 3) {
        setMessages([
          ..._messages,
          {
            from: "English BOT",
            text: after_retry[
              Math.floor(Math.random() * (after_retry.length - 1))
            ],
            type: message?.type,
            buttons: message?.buttons,
          },
        ]);
      } else {
        setTimes(0);
        const result = botMsg.message.buttons.find(
          (btn) => btn.correct === true
        )?.title;
        setMessages([
          ..._messages,
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
        if (!botMsg.last) {
          socket.emit("getModelQuestion", { questionNo, modelNo });
        } else {
          socket.emit("getEndQuestion", {});
        }
      }
    }
    // }, 1000);
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
        <StyledForm onSubmit={(e) => sendMsgSubmit(e)}>
          <input
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setMsg({ text: e.target.value });
                e.target.value = "";
              }
            }}
            type="text"
            placeholder="send a message..."
          />
          <button type="submit">
            <img src={send} alt="" />
          </button>
        </StyledForm>
      </Content>
    </>
  );
};

export default ThirdBot;
