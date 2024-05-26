import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
  margin: 0 50px;

  .mainWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .Slogan {
    max-width: 550px;
    h1 {
      font-size: 80px;
      margin-bottom: 30px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 30px;
      width: 460px;
      margin: 50px 0;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      gap: 40px;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        font-size: 18px;
        font-weight: 500;

        width: 152px;
        height: 62px;
        border-radius: 40px;

        background-color: var(--green);
        color: var(--white);
        cursor: pointer;
      }
      #demoView {
        background-color: transparent;
        line-height: normal;
        gap: 14px;
        color: var(--true-black);
        img {
          width: 40px;
        }
      }
    }
  }

  .finalContentWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px;
    gap: 60px;

    h1 {
      font-size: 40px;
      font-weight: 700px;
    }
    .partnersLogosWrapper {
      display: flex;
      gap: 50px;
      img {
        width: 160px;
      }
    }
  }
`;
