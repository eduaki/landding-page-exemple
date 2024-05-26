import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  padding: 80px;
`;
export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 70px;

  div.top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 50px;
      font-weight: 600;
      max-width: 330px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      color: var(--gray);
      max-width: 460px;
    }
    button {
      color: var(--white);
      padding: 18px 30px;
      font-size: 18px;
      font-weight: 500;
      line-height: 30px;
      background-color: var(--green);
      border-radius: 70px;
      transition: 0.4s ease;
    }
    button:hover {
      scale: 1.2;
    }
  }

  .panelsWrapper {
    display: flex;
    justify-content: center;
    gap: 44px;
  }
`;
