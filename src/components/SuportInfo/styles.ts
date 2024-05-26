import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--off-white);
  p {
    max-width: 428px;
    font-weight: 500;
  }
  h1 {
    max-width: 617px;
    font-weight: 700;
  }
  p.subtitle {
    max-width: 644px;
    font-size: 16px;
    color: var(--gray);
  }
  div.left,
  div.right {
    display: flex;
    flex-direction: column;

    gap: 30px;
    padding: 60px 0;
  }
  #title {
    font-size: 50px;
  }
  .rating {
    display: flex;
    flex-direction: row;
    gap: 30px;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
`;
