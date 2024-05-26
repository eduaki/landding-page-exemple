import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Inter", sans-serif;

  color: var(--true-black);
}
html{
  background-color: var(--dark-white);
}
*, button, input, li, ul, a{
  list-style: none;
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: none;
}

:root{
  --white: #ffff;
  --off-white: #F9F8FE;
  --dark-white: #e9f5ec;
  --black: #2f2f2f;
  --true-black: #222;
  --gray:  #A6A6A6;
  --green: #54BD95;
  --light-green: #6BC2A1;
}

`;
export const MainContainer = styled.div`
  /* max-width: 1440px;
  margin: 0 auto; */
`;
