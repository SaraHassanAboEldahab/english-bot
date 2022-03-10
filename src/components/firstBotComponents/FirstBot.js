import React, { useState, useEffect } from "react";
import Typing from "../shared/Typing";
import { Content } from "../shared/styles";
import MessagesContainer from "./MessagesContainer";
import FormContainer from "../shared/FormContainer";

const FirstBot = ({ setActive }) => {
  const [questionNo, setQuestionNo] = useState(
    JSON.parse(localStorage.getItem("bot1"))?.questionNo || 0
  );
  const [modelNo, setModelNo] = useState(
    JSON.parse(localStorage.getItem("bot1"))?.modelNo ??
      (JSON.parse(localStorage.getItem("doneBefore1"))?.flag
        ? Math.floor(Math.random() * 3)
        : 0)
  );

  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages1"))?.messages || []
  );

  const [typing, setTyping] = useState(
    JSON.parse(localStorage.getItem("bot1"))?.typing ?? true
  );
  const [botMsg, setBotMsg] = useState(
    JSON.parse(localStorage.getItem("bot1"))?.botMsg || {}
  );
  const [currentQuestionType, setCurrentQuestionType] = useState(
    JSON.parse(localStorage.getItem("bot1"))?.currentQuestionType || "intro"
  );

  useEffect(() => {
    setActive(true);
  }, [setActive]);

  useEffect(() => {
    localStorage.setItem(
      "bot1",
      JSON.stringify({
        questionNo,
        currentQuestionType,
        botMsg,
        typing,
        modelNo,
      })
    );
  }, [questionNo, currentQuestionType, botMsg, typing, modelNo]);

  return (
    <>
      <Content>
        <MessagesContainer
          questionNo={questionNo}
          currentQuestionType={currentQuestionType}
          botMsg={botMsg}
          typing={typing}
          modelNo={modelNo}
          messages={messages}
          setTyping={setTyping}
          setQuestionNo={setQuestionNo}
          setMessages={setMessages}
          setBotMsg={setBotMsg}
          setModelNo={setModelNo}
          setCurrentQuestionType={setCurrentQuestionType}
        />
        {typing && <Typing />}
        <FormContainer
          questionNo={questionNo}
          currentQuestionType={currentQuestionType}
          botMsg={botMsg}
          modelNo={modelNo}
          messages={messages}
          setTyping={setTyping}
          setQuestionNo={setQuestionNo}
          setMessages={setMessages}
          setBotMsg={setBotMsg}
          setCurrentQuestionType={setCurrentQuestionType}
        />
      </Content>
    </>
  );
};

export default FirstBot;
