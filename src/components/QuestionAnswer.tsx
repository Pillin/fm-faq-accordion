import React from "react";
import styled from "@emotion/styled";
import { P } from "./Typography";
import { ChevronDown, ChevronUp } from "@emotion-icons/fa-solid";

const Container = styled.section`
  border-style: solid;
  border-color: hsl(240, 5%, 91%);
  border-width: 0px 0px 1px 0px;
  width: 100%;
`;

const QuestionTitle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  width: 90vw;
  @media (min-width: 769px) {
    min-width: 350px;
    width: 350px;
  }
`;

const Answer = styled.section<{ active: boolean }>`
  padding: ${({ active }) => (active ? "16px 0px" : "0px")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  max-height: ${({ active }) => (active ? "200px" : "0px")};
  transition-delay: 0.5s;
  width: 90vw;
  transition: visibility 0.2s, opacity 1s ease, max-height 0.5s ease 0s;
  @media (min-width: 769px) {
    width: 350px;
  }
`;

const QuestionAnswer = (props: { question: string; answer: string; active: boolean; onClick: () => void }) => {
  return (
    <Container>
      <QuestionTitle onClick={props.onClick}>
        <P active={props.active}>{props.question}</P>
        {props.active ? (
          <ChevronUp size="12px" color="hsl(14, 88%, 65%)" />
        ) : (
          <ChevronDown size="12px" color="hsl(14, 88%, 65%)" />
        )}
      </QuestionTitle>
      <Answer active={props.active}>
        <P>{props.active ? props.answer : ""}</P>
      </Answer>
    </Container>
  );
};

export default QuestionAnswer;
