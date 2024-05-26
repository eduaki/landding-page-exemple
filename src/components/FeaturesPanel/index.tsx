import Panel from "../Panel";
import { Cover1, Cover2, Cover3 } from "../imagesImports";
import { Container, Wrapper } from "./styles";

export default function FeaturesPanel() {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="top-header">
            <h1>Our Features you cab get</h1>
            <p>
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
            <button>Get Started</button>
          </div>

          <div className="panelsWrapper">
            <Panel
              title="Collboration Teams "
              img={Cover1}
              desc="Here you can handle projects together with team virtually"
            />
            <Panel
              title="Cloud Storage"
              img={Cover2}
              desc="No nedd to worry about storage because we provide storage up to 2 TB"
            />
            <Panel
              title="Daily Analytics"
              img={Cover3}
              desc="We always provide useful informatin to make it easier for you every day"
            />
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
