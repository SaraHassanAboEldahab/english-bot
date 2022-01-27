import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import englishBot from "../images/english.png";
import leftArrow from "../images/left-arrow.png";

const Header = ({ active }) => {
  return (
    <HeaderDiv>
      <>
        {active && (
          <Link to="/english-bot">
            <StyledBackImg src={leftArrow} alt="" />
          </Link>
        )}

        <StyledH1>
          <StyledBotImg src={englishBot} alt="" />
          <span> English Bot </span>
        </StyledH1>
        <p>I can help you to improve your english.</p>
      </>
    </HeaderDiv>
  );
};

export default Header;

// styles
const Container = styled.div`
  padding: 0px 25px;
`;

const StyledH1 = styled.h1`
  margin: 10px 0px 0px 0px;
  font-weight: 500;
  display: flex;
  align-items: center;
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

const HeaderDiv = styled.div`
  color: white;
  background-color: #14243d;
  padding: 40px 20px 100px 20px;
  p {
    font-size: 20px;
  }
`;
