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

export const StyledCardContainer = styled.div`
  margin: 1rem;
  width: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, min(25rem, calc(90vw)));
  gap: 1rem;
  @supports not (gap: 1rem) {
    > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
