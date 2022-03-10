import React, { useState, useEffect } from "react";
import Typing from "../shared/Typing";
import MessagesContainer from "./MessagesContainer";
import FormContainer from "../shared/FormContainer";
import { Content } from "../shared/styles";

const SecondBot = ({ setActive }) => {
  const [questionNo, setQuestionNo] = useState(
    JSON.parse(localStorage.getItem("bot2"))?.questionNo || 0
  );
  const [modelNo, setModelNo] = useState(
    JSON.parse(localStorage.getItem("bot2"))?.modelNo ??
      (JSON.parse(localStorage.getItem("doneBefore2"))?.flag
        ? Math.floor(Math.random() * 3)
        : 0)
  );

  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages2"))?.messages || []
  );

  const [typing, setTyping] = useState(
    JSON.parse(localStorage.getItem("bot2"))?.typing ?? true
  );
  const [botMsg, setBotMsg] = useState(
    JSON.parse(localStorage.getItem("bot2"))?.botMsg || {}
  );
  const [currentQuestionType, setCurrentQuestionType] = useState(
    JSON.parse(localStorage.getItem("bot2"))?.currentQuestionType || "intro"
  );

  useEffect(() => {
    setActive(true);
  }, [setActive]);

  useEffect(() => {
    localStorage.setItem(
      "bot2",
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

export default SecondBot;
