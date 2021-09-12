import React from "react";
import styled from "@emotion/styled";
import FAQCard from "./components/FAQCard";

import "./styles.css";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    hsl(273, 75%, 66%) 0%,
    hsl(240, 73%, 65%) 100%
  );
`;

export default function App() {
  return (
    <Container>
      <FAQCard />
    </Container>
  );
}
