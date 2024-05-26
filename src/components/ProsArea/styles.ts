import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 50px;

  max-width: 1440px;
  margin: 0 auto;

  .left {
    display: flex;
    flex-direction: column;
    gap: 50px;
    div h1 {
      font-size: 50px;
      font-weight: 700;
      max-width: 430px;
    }
    .checklist {
      display: flex;
      flex-direction: column;
      gap: 30px;
      li {
        display: flex;
        gap: 20px;
        p {
          font-size: 18px;
          font-weight: 500;
          line-height: 30px;
        }
      }
    }
  }
`;
