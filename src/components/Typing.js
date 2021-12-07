import React from "react";
import styled, { keyframes } from "styled-components";

const Typing = () => {
  return (
    <TypingDiv>
      <DotesContainer>
        <Dot />
        <Dot />
        <Dot />
      </DotesContainer>
    </TypingDiv>
  );
};

export default Typing;

const TypingDiv = styled.div`
  background-color: #717171;
  padding: 15px 20px;
  border-radius: 20px;
  border-bottom-left-radius: 2px;
  width: fit-content;
  margin: 0px 0px 20px 20px;
`;

const DotesContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 17px;
  padding: 0px;
  margin: 0px;
`;

const typingAnimation = keyframes`
 0% {
    transform: translateY(0px);
    background-color:white;
  }
  28% {
    transform: translateY(-7px);
    background-color:#d9d8d8;
  }
  44% {
    transform: translateY(0px);
    background-color:#bbbaba;
  }
`;

const Dot = styled.li`
  background-color: white;
  border-radius: 50%;
  height: 7px;
  margin-right: 4px;
  vertical-align: middle;
  width: 7px;
  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 400ms;
  }
  animation: ${typingAnimation} 1.8s infinite ease-in-out;
`;
