import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--darkest-blue);
`;
export const Wrapper = styled.div`
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  width: 1440px;
  margin: 0 auto;
  padding: 130px;
  display: flex;
  flex-direction: column;

  .leftTexts {
    display: flex;
    flex-direction: column;

    gap: 40px;

    h1 {
      max-width: 444px;
      color: var(--white);
      font-size: 50px;
      font-weight: 600;
    }

    p {
      max-width: 460px;
      color: var(--gray);
      font-size: 18px;
      line-height: 30px;
    }

    img#sitation {
      width: 45px;
    }
    .photos {
      display: flex;
      gap: 20px;
    }
    img {
      width: 66px;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      gap: 30px;

      img {
        width: 160px;
      }

      p {
        color: var(--gray);
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-radius: 80px;
        border: solid 2px var(--gray);
        padding: 7px;

        img {
          width: 46px;
          height: 46px;
          padding: 10px;
          border-radius: 10000px;
          background-color: var(--green);
        }

        input {
          width: 366px;
          height: 44px;

          color: var(--gray);
          font-size: 18px;
          font-weight: 500;
          line-height: 30px;
          margin-left: 14px;
        }
      }
    }

    .right {
      display: flex;
      gap: 64px;

      .block {
        display: flex;
        flex-direction: column;
        p.title {
          margin-bottom: 30px;
          color: var(--white);
          font-size: 18px;
          font-weight: 500;
        }
        a {
          color: var(--gray);
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
`;
