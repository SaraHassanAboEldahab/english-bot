import React, { useState } from "react";

//here we create context object
const Context = React.createContext("english");

export const Message = ({ children }) => {
  const [msg, setMsg] = useState({ text: "" });
  const onMsgChange = (msg) => {
    setMsg(msg);
  };
  return (
    <Context.Provider value={{ msg, onMsgChange }}>{children}</Context.Provider>
  );
};

export default Context;
