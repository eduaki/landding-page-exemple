import { CoinGroup } from "../imagesImports";
import { Container } from "./styles";

export default function Form() {
  return (
    <>
      <Container>
        <div className="top">
          <img src={CoinGroup} alt="coinGroup" />
          <h1>Get Started</h1>
        </div>
        <div className="inputWrapper">
          <div>
            <label htmlFor="mail">Email</label>
            <input id="mail" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <textarea id="msg" placeholder="What are you say ?" />
          </div>
          <div className="buttonWrapper">
            <button>Requent Demo</button>
            <p>
              or <a href="#">Start a Free Trial</a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
