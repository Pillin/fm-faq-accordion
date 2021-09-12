import React from "react";
import styled from "@emotion/styled";
import QuestionAnswer from "./QuestionAnswer";
import { IMG } from "./Image";
import { H1 } from "./Typography";

const Container = styled.section`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  max-height: 800px;
  border-radius: 20px;
  padding: 32px 16px;
  @media (min-width: 769px) {
    padding: 32px;
    flex-wrap: wrap;
    max-height: 600px;
  }
`;

const Content = styled.section`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IMGIllustration = {
  mobile: "/images/illustration-woman-online-mobile.svg",
  desktop: "/images/illustration-woman-online-desktop.svg",
  alt: "illustration woman",
  style: {
    height: "400px",
    left: "-125px",
    "@media (min-width: 769px)": {
      height: "400px"
    }
  }
};

const FAQList = [
  {
    question: "How many team members can I invite?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "How do I reset my password?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "Do you provide additional support?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  }
];

const FAQCard = () => {
  const [openIndex, setOpenIndex] = React.useState(-1);
  return (
    <Container>
      <IMG {...IMGIllustration} />
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
