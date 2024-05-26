import {
  Descript,
  Grammarly,
  Intercom,
  MainBanner,
  Notion,
  Play,
  Stroke,
  Unsplash,
} from "../imagesImports";
import { Container } from "./styles";

export default function MainContent() {
  return (
    <Container>
      <div className="mainWrapper">
        <div className="TextsWrapper">
          <div className="Slogan">
            <div>
              <h1>We're here to Increase your Productivity</h1>
              <img src={Stroke} alt="stroke" />
            </div>
            <div>
              <p>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.
              </p>
            </div>
            <div className="buttons">
              <button>Try free trial</button>
              <button id="demoView">
                <img src={Play} alt="play" />
                <p>View Demo</p>
              </button>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={MainBanner} alt="mainBanner" />
        </div>
      </div>
      <div className="finalContentWrapper">
        <h1>More than 25,000 teams use Collabs</h1>
        <div className="partnersLogosWrapper">
          <img src={Unsplash} alt="unsplashLogo" />
          <img src={Notion} alt="notionLogo" />
          <img src={Intercom} alt="intercomLogo" />
          <img src={Descript} alt="descriptLogo" />
          <img src={Grammarly} alt="grammarlyLogo" />
        </div>
      </div>
    </Container>
  );
}
