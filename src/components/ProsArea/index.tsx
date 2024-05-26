import { Check, SecondBanner } from "../imagesImports";
import { Container, Wrapper } from "./styles";

export default function ProsArea() {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="left">
            <div>
              <h1>What Benifit Will You Get</h1>
            </div>
            <div className="checklist">
              <li>
                <img src={Check} alt="check" />{" "}
                <p>Free Consulting With Experet Saving Money</p>
              </li>
              <li>
                <img src={Check} alt="check" /> <p>Online Banking</p>
              </li>
              <li>
                <img src={Check} alt="check" />{" "}
                <p>Investment Report Every Month</p>
              </li>
              <li>
                <img src={Check} alt="check" />{" "}
                <p>Saving Money For The Future</p>
              </li>
              <li>
                <img src={Check} alt="check" /> <p>Online Transection</p>
              </li>
            </div>
          </div>

          <div className="right">
            <img src={SecondBanner} alt="SecondBanner" />
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
