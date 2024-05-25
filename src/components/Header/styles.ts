import { styled } from "styled-components";

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  img {
    width: 160px;
  }
`;
export const NavWrapper = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 40px;
    li {
      font-size: 16px;
      color: var(--gray);
      font-weight: 500;
      cursor: pointer;
    }
    li:hover {
      color: var(--true-black);
    }
  }
  .foccused {
    color: var(--true-black);
  }
`;
export const LogOpts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  button {
    color: var(--gray);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  #singup {
    color: var(--white);
    background-color: var(--green);
    padding: 10px;
    border-radius: 10px;
  }
`;
