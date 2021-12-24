import React from "react";
import styled from "styled-components";

function MessageWithButton({ buttons, text, onBtnClick }) {
  return (
    <Card>
      <StyledH3>{text}</StyledH3>
      <StyledUl>
        {buttons?.map((btn) => (
          <StyledLi
            onClick={() => {
              onBtnClick(btn);
            }}
          >
            {btn.title}
          </StyledLi>
        ))}
      </StyledUl>
    </Card>
  );
}

export default MessageWithButton;

const Card = styled.div`
  max-width: 300px;
  text-align: center;
`;
const StyledH3 = styled.h3`
  margin: 0px;
  /* background-color: #9b9b9b; */
  background-color: #0073a5;
  padding: 20px 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  border: 1px solid #f0f0f0;
`;
const StyledUl = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  border: 1px solid #f0f0f0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const StyledLi = styled.li`
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  padding: 10px 0px;
  color: #9b9b9b;
  cursor: pointer;
  &:hover {
    color: #0073a5;
  }
  &:last-child {
    border-bottom: none;
  }
`;
