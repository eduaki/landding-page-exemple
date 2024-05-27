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
button{
  cursor: pointer;
}

footer {
  div{
    max-width: 1440px;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    padding: 40px;

  p,
  a {
    color: var(--white);
  } 
}

    background-color: var(--darkest-blue);

  }

:root{
  --white: #ffff;
  --off-white: #F9F8FE;
  --dark-white: #e9f5ec;
  --black: #2f2f2f;
  --true-black: #222;
  --gray:  #A6A6A6;
  --green: #54BD95;
  --light-green: #85DAB9;
  --darkest-blue: #161C28;
  --dark-blue: #222938;
}

`;
export const MainContainer = styled.div`
  /* max-width: 1440px;
  margin: 0 auto; */
`;
export const Wrapper = styled.div`
  background: hsla(157, 44%, 54%, 1);

  background: linear-gradient(
    135deg,
    hsla(157, 44%, 54%, 1) 14%,
    hsla(150, 9%, 86%, 1) 41%,
    hsla(343, 15%, 91%, 1) 61%,
    hsla(155, 19%, 83%, 1) 82%,
    hsla(157, 44%, 54%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(157, 44%, 54%, 1) 14%,
    hsla(150, 9%, 86%, 1) 41%,
    hsla(343, 15%, 91%, 1) 61%,
    hsla(155, 19%, 83%, 1) 82%,
    hsla(157, 44%, 54%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(157, 44%, 54%, 1) 14%,
    hsla(150, 9%, 86%, 1) 41%,
    hsla(343, 15%, 91%, 1) 61%,
    hsla(155, 19%, 83%, 1) 82%,
    hsla(157, 44%, 54%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#54BD95", endColorstr="#D9DFDC", GradientType=1 );
`;
