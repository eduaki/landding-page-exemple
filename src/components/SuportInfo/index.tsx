import SuportCard from "../SuportCard";
import {
  Command,
  FiveStars,
  FourStars,
  HeartSign,
  PieChart,
} from "../imagesImports";
import { Container, Wrapper } from "./styles";

export default function SuportInfo() {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="left">
            <h1 id="title">How we support our pratner all over the world</h1>
            <p className="subtitle">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>

            <div className="rating">
              <div>
                <img src={FiveStars} alt="fiveStars" />
                <span>
                  <strong>4.9</strong> / 5 rating
                </span>
                <p>databricks</p>
              </div>
              <div>
                <img src={FourStars} alt="fourStars" />
                <span>
                  <strong>4.8</strong> / 5 rating
                </span>
                <p>Chainalysis</p>
              </div>
            </div>
          </div>

          <div className="right">
            <SuportCard
              img={HeartSign}
              title="Publishing"
              desc="Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd"
            />
            <SuportCard
              img={PieChart}
              title="Analytics"
              desc="Analyze your performance and create goegeous report"
            />
            <SuportCard
              img={Command}
              title="Engagement"
              desc="Quiuckly navigate you anda engage with your adience"
            />
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
