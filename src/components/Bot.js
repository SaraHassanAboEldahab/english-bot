import React, { useContext, useState } from "react";
import styled from "styled-components";
import dataContext from "../contexts/dataContext";
import englishBot from "../images/english.png";
import leftArrow from "../images/left-arrow.png";
import Chat from "./Chat";

const Bot = () => {
  const [active, setActive] = useState(false);
  const { bot } = useContext(dataContext);

  return (
    <>
      <Header>
        <Container>
          {active && (
            <StyledBackImg
              onClick={() => setActive(false)}
              src={leftArrow}
              alt=""
            />
          )}

          <StyledH1>
            <StyledBotImg src={englishBot} alt="" />
            <span> Hello {bot && bot.name}</span>
          </StyledH1>
          <p>Any sentence can be translated with the help of our BOT.</p>
        </Container>
      </Header>
      <Container>
        <Content>
          {!active && (
            <StyledDefault>
              <h3>Get Started</h3>
              <StyledDiv>
                <div>
                  <span className="replyNote">Our usual reply time</span>
                  <br />
                  <span className="replyTome">🕓 Under 5 mins</span>
                </div>
              </StyledDiv>
              <button className="sendBtn" onClick={() => setActive(true)}>
                Send us a message
              </button>
            </StyledDefault>
          )}
          {active && <Chat />}
        </Content>
      </Container>
    </>
  );
};

export default Bot;

//styles
const Container = styled.div`
  padding: 0px 25px;
`;

const StyledBackImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 10px 20px 0px;
  cursor: pointer;
`;
const StyledBotImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
const Header = styled.div`
  color: white;
  background-color: #0a5a86;
  padding: 40px 20px 100px 20px;
  p {
    font-size: 20px;
  }
`;

const StyledH1 = styled.h1`
  margin: 10px 0px 0px 0px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin: -70px 0px 0px 0px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,
    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const StyledDefault = styled.div`
  padding: 15px 20px;
  .replyNote {
    color: gray;
    margin: 0px 0px 5px 0px;
  }
  .replyTome {
    font-weight: bold;
  }
  .sendBtn {
    border: none;
    background-color: black;
    color: white;
    padding: 15px 20px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    width: 200px;
    margin: 30px 0px 40px 0px;
    &:hover {
      background-color: #3b3b3b;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;
