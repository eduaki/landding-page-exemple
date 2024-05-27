import Form from "../Form";
import {
  ArrowRight,
  Logo,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Play,
  Sitation,
} from "../imagesImports";
import { Container, Wrapper } from "./styles";

export default function Footer() {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="flex-row">
            <div className="leftTexts">
              <h1>People are Saying About DoWhith</h1>
              <p>
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>
              <img id="sitation" src={Sitation} alt="sitaiton" />
              <p>
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <p>_ Aria Zinanrio</p>
              <div className="photos">
                <img src={Photo1} alt="photo1" />
                <img src={Photo2} alt="photo2" />
                <img src={Photo3} alt="photo3" />
                <img src={Photo4} alt="photo4" />
                <img src={Play} alt="play" />
              </div>
              <div className="right"></div>
            </div>

            <div className="rightForm">
              <Form />
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              <img src={Logo} alt="logo" />
              <p>Get started noew try our product</p>
              <div>
                <input type="email" placeholder="Enter your email here" />
                <img src={ArrowRight} alt="arrowRight" />
              </div>
            </div>
            <div className="right">
              <div className="block">
                <p className="title">Support</p>
                <a href="#">Help centre</a>
                <a href="#">Account information</a>
                <a href="#">About</a>
                <a href="#">Contact us</a>
              </div>
              <div className="block">
                <p className="title">Help and Solution</p>
                <a href="#">Talk to support</a>
                <a href="#">Support docs</a>
                <a href="#">System sstatus</a>
                <a href="#">Covid responde</a>
              </div>
              <div className="block">
                <p className="title">Product</p>
                <a href="#">Update</a>
                <a href="#">Security</a>
                <a href="#">Beta test</a>
                <a href="#">Pricing Product</a>
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
      <footer>
        <div>
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <p>
            <a href="#">Terms and Condtions</a> • <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  );
}
