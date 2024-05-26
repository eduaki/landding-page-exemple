import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  img {
    max-width: 60px;
    max-height: 60px;
    padding: 15px;
    background: var(--white);

    box-shadow: 2px 2px 30px 1px rgb(184, 184, 184, 30%);
  }
  h1 {
    font-size: 28px;
  }
  p {
    color: var(--gray);
  }
  div {
    gap: 10px;
  }
`;
