import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px;

  .topInfos {
    display: flex;
    flex-direction: column;
    gap: 40px;
    h1 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      line-height: 73px;
      max-width: 492px;
    }
    p {
      color: var(--gray);
      text-align: center;
      font-size: 18px;
      font-weight: 700;
    }

    .buttonsWrapper {
      display: flex;
      justify-content: space-between;
      align-self: center;
      align-items: center;

      gap: 15px;

      background-color: white;
      box-shadow: 1px 1px 50px 1px rgba(0, 0, 0, 12%);

      border-radius: 10px;
      width: 340px;
      padding: 8px;

      .selected {
        background-color: var(--green);
        color: var(--white);
      }
      button {
        width: 160px;
        height: 60px;
        border-radius: 10px;

        transition: 0.4s ease;

        color: var(--black);
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;
      }
      button:hover {
        scale: 1.1;
        background-color: var(--green);
        color: var(--white);
      }
    }
  }

  .plansPannels-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    margin: 50px;

    .pannelContainer {
      background-color: var(--white);
      box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 12%);
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      width: 374px;
      /* height: 644px; */

      padding: 40px;

      p,
      span {
        color: var(--gray);
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
      }
      span {
        margin-left: -10px;
      }

      h1 {
        color: var(--black);
        font-size: 30px;
        font-weight: 600;
      }
      h2 {
        color: var(--black);
        font-size: 50px;
        font-weight: 600;
        line-height: 30px;
      }

      .price-wrapper {
      }

      ul {
        margin-top: 30px;
        background-color: var(--off-white);
        border-radius: 10px;
        width: 334px;
        height: 380px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;
        gap: 25px;

        li {
          display: flex;
          align-items: center;
          gap: 10px;
          p {
            color: var(--black);
          }
        }

        button {
          width: 260px;
          height: 64px;
          border-radius: 20px;
          background: var(--white);
          box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.05);

          align-self: center;

          color: var(--green);
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;

          transition: 0.4s ease;
        }

        button:hover {
          scale: 1.1;
        }
      }
    }

    .best {
      background-color: var(--green);
      h2,
      span,
      p,
      h1 {
        color: var(--white);
      }

      ul {
        background-color: var(--white);

        button {
          background-color: var(--green);
          color: var(--white);
        }
      }

      #discount {
        color: var(--white);
        background-color: var(--light-green);
        padding: 5px 15px;
        border-radius: 10px;
        margin-top: 5px;
      }
    }
  }
`;
