import React, { useState } from "react";
import send from "../../images/send.png";
import { StyledForm } from "./styles";
import { socket } from "./const";

const FormContainer = ({
  questionNo,
  currentQuestionType,
  botMsg,
  modelNo,
  messages,
  setTyping,
  setQuestionNo,
  setMessages,
  setBotMsg,
  setCurrentQuestionType,
}) => {
  const [msg, setMsg] = useState({ text: "" });
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
      // setBotMsg({});
    }
    setMsg({ text: "" });
  };

  return (
    <StyledForm onSubmit={(e) => sendMsgSubmit(e)}>
      <input
        value={msg.text}
        onChange={(e) => setMsg({ text: e.target.value })}
        type="text"
        placeholder="send a message..."
      />
      <button type="submit">
        <img src={send} alt="" />
      </button>
    </StyledForm>
  );
};

export default FormContainer;
