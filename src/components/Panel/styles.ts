import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  img {
    max-width: 340px;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
  }
  p {
    max-width: 340px;
    color: var(--gray);
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
  }
`;
