import styled from "@emotion/styled";

export const P = styled.p<{ active?: boolean }>`
  color: ${({ active }) =>
    active ? "hsl(237, 12%, 33%)" : "hsl(240, 6%, 50%)"}
  font-weight: 300;
  margin: 0px;
`;

export const H1 = styled.h1`
  color: hsl(237, 12%, 33%);
  font-weight: 600;
  text-transform: uppercase;
  margin: 4px 0px;
  font-size: 2.7rem;
  letter-spacing: 0.5rem;
  padding: 32px 0px;
`;
export const H2 = styled.h2`
  color: hsl(0, 36%, 70%);
  font-weight: 300;
  text-transform: uppercase;
  margin: 4px 0px;
  font-size: 2.7rem;
  letter-spacing: 0.5rem;
`;

export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
