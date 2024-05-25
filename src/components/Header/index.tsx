import { Container, LogOpts, LogoWrapper, NavWrapper } from "./styles.ts";
import { Logo } from "../imagesImports";

export default function Header() {
  return (
    <>
      <Container>
        <LogoWrapper>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </LogoWrapper>
        <NavWrapper>
          <ul>
            <li className="foccused">Home</li>
            <li>Product</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Abaut Us</li>
          </ul>
        </NavWrapper>
        <LogOpts>
          <button>Login</button>
          <button id="singup">Sign Up</button>
        </LogOpts>
      </Container>
    </>
  );
}
