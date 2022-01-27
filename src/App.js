import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import FirstBot from "./components/FirstBot";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Header active={active} />
      <Container>
        <Routes>
          <Route path="/english-bot" element={<Home setActive={setActive} />} />
          <Route path="/english-bot/bot1" element={<FirstBot />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;

//styles
const Container = styled.div`
  padding: 0px 25px;
`;
