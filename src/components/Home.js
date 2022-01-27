import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const bots = [
  {
    botName: "Correction Bot",
    botDescription: "It will correct your incorrect answers",
    botLink: "/english-bot/bot1",
  },
  {
    botName: "Incorrect Bot",
    botDescription: "It won't correct your incorrect answers",
    botLink: "/english-bot/bot2",
  },
  {
    botName: "Try Bot",
    botDescription: "It will correct your incorrect answers after three tries",
    botLink: "/english-bot/bot3",
  },
];

const Bot = ({ setActive }) => {
  return (
    <Content>
      <>
        <StyledDiv>
          <h3>Get Started With One Of The Bots 👇</h3>
          {/* <div>
            <span className="replyNote">The bot usual reply time</span>
            <br />
            <span className="replyTome">🕓 Under 1 min</span>
          </div> */}

          {bots.map((bot) => (
            <details>
              <summary>{bot.botName}</summary>
              <p>{bot.botDescription}</p>
              <FlexDiv>
                <Link to={bot.botLink}>
                  <StartedBtn onClick={() => setActive(true)}>
                    Get Started
                  </StartedBtn>
                </Link>
                <Link to={bot.botLink}>
                  <ResetBtn
                    onClick={() => {
                      localStorage.removeItem("messages");
                      localStorage.removeItem("bot");
                      setActive(true);
                    }}
                  >
                    Reset
                  </ResetBtn>
                </Link>
              </FlexDiv>
            </details>
          ))}
        </StyledDiv>
      </>
    </Content>
  );
};

export default Bot;

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

const StyledDiv = styled.div`
  padding: 15px 20px;
  .replyNote {
    color: gray;
    margin: 0px 0px 5px 0px;
  }
  .replyTome {
    font-weight: bold;
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;

const StartedBtn = styled.button`
  border: none;
  background-color: #0695d5;
  color: white;
  padding: 15px 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  margin: 30px 0px 40px 0px;
  transition: background-color 0.1s ease-in;
  margin-right: 20px;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: #bc6a39;
  }
`;

const ResetBtn = styled.button`
  border: none;
  background-color: #a00b0b;
  color: white;
  padding: 15px 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  margin: 30px 0px 40px 0px;
  transition: background-color 0.1s ease-in;
`;
