import React from "react";
import styled from "@emotion/styled";
import QuestionAnswer from "./QuestionAnswer";
import useMediaQuery from "../hooks/useMediaQuery";
import { IMG } from "./Image";
import { H1 } from "./Typography";

const Container = styled.section`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 32px 16px;
  @media (min-width: 769px) {
    padding: 32px;
    flex-wrap: wrap;
    max-height: 600px;
    justify-content: center;
  }
`;

const Content = styled.section`
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0px;
  @media (min-width: 769px) {
    left: -140px;
  }
`;

const FAQList = [
  {
    question: "How many team members can I invite?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "How do I reset my password?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "Do you provide additional support?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  }
];

const IMGIllustration = {
  mobile: "/images/illustration-woman-online-mobile.svg",
  desktop: "/images/illustration-woman-online-desktop.svg",
  alt: "illustration woman"
};

const IMGIllustrationBox = {
  mobile: "/images/illustration-box-desktop.svg",
  desktop: "/images/illustration-box-desktop.svg",
  alt: "illustration box"
};

const FAQCard = () => {
  const [openIndex, setOpenIndex] = React.useState(-1);
  const isMobile = useMediaQuery("(max-width: 769px)");

  const style = {
    position: "relative",
    height: isMobile ? "400px" : "400px",
    left: isMobile ? "0px" : " -150px"
  } as React.CSSProperties;

  const styleBox = {
    position: "absolute",
    height: "200px",
    left: openIndex ? " -140px" : "-100px",
    display: isMobile ? "none" : "inline",
    transition: "left 1s ease 0s"
  } as React.CSSProperties;

  return (
    <Container>
      <IMG {...IMGIllustration} style={style} />
      <IMG {...IMGIllustrationBox} style={styleBox} />
      <Content>
        <H1>FAQ</H1>
        {FAQList.map((elem, index) => (
          <QuestionAnswer
            key={`question-answer-${index}`}
            {...elem}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            active={openIndex === index}
          />
        ))}
      </Content>
    </Container>
  );
};

export default FAQCard;
