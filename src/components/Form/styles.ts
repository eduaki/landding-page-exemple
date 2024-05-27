import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-blue);

  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 10px;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: var(--white);
      font-size: 30px;
      font-weight: 500;
    }

    img {
      width: 72px;
    }
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .inputWrapper > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      color: var(--white);
      font-size: 18px;
      font-weight: 500;
    }
    input {
      width: 440px;
      height: 50px;
      border-radius: 10px;
      background-color: var(--white);
      padding: 15px 20px;

      color: var(--gray);
      font-size: 14px;
      font-weight: 500;
    }
    textarea#msg {
      width: 440px;
      height: 80px;
      border-radius: 10px;
      background-color: var(--white);
      padding: 15px 20px;
    }
  }
  .buttonWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      align-self: flex-end;
      color: var(--gray);
      font-size: 14px;
      font-weight: 500;

      a {
        color: var(--white);
      }
    }
  }
  button {
    width: 440px;
    height: 50px;
    border-radius: 10px;
    background-color: var(--green);
    color: var(--white);

    font-size: 16px;
    font-weight: 600;
  }
`;
