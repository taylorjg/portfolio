import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const GlobalStyles = css`
  body,
  html,
  #root {
    margin: 0;
    padding: 0;
  }
`;

export const StyledPageHeader = styled.div`
  height: 2rem;
  background-color: #121212;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const StyledCardContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, min(25rem, calc(90vw)));
  gap: 1rem;
  justify-content: center;
`;
