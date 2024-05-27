import { Check } from "../imagesImports";
import { Container, Wrapper } from "./styles";

export default function PlansList() {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="topInfos">
            <h1>Choose Plan That’s Right For You</h1>
            <p>Choose plan that works best for you, feel free to contact us</p>
            <div className="buttonsWrapper">
              <button>Bil Monthly</button>
              <button className="selected">Bil Yearly</button>
            </div>
          </div>

          <div className="plansPannels-wrapper">
            <div className="pannelContainer">
              <h1>Free</h1>
              <p>Have a go and test your superpowers</p>

              <div className="price-wrapper">
                <span>$</span>
                <h2>0</h2>
              </div>
              <ul>
                <li>
                  <img src={Check} alt="check" />
                  <p>2 Users</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>2 Files</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Public Share & Comments</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Chat Support</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>New income apps</p>
                </li>

                <button>Signup for free</button>
              </ul>
            </div>

            <div className="pannelContainer best">
              <h1>Pro</h1>
              <p>Experiment the power of infinite possibilities</p>

              <div className="price-wrapper">
                <span>$</span>
                <h2>8</h2>
              </div>

              <p id="discount">Save $50 a year</p>

              <ul>
                <li>
                  <img src={Check} alt="check" />
                  <p>4 Users</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>All apps</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Unlimited editable exports</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Folders and collaboration</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>All incoming apps</p>
                </li>

                <button>Go to pro</button>
              </ul>
            </div>

            <div className="pannelContainer">
              <h1>Business</h1>
              <p>Have a go and test your superpowers</p>

              <div className="price-wrapper">
                <span>$</span>
                <h2>16</h2>
              </div>

              <ul>
                <li>
                  <img src={Check} alt="check" />
                  <p>All the features of pro plan</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Account success Manager</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Single Sign-On (SSO)</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Co-conception pogram</p>
                </li>
                <li>
                  <img src={Check} alt="check" />
                  <p>Collaboration-Soon</p>
                </li>

                <button>Go to Business</button>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
