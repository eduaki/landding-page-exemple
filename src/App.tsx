import { GlobalStyles, MainContainer, Wrapper } from "./GlobalStyles";
import FeaturesPanel from "./components/FeaturesPanel";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SuportInfo from "./components/SuportInfo";

function App() {
  return (
    <>
      <MainContainer>
        <Wrapper>
          <Header />
          <MainContent />
          <SuportInfo />
        </Wrapper>
        <FeaturesPanel />
        <GlobalStyles />
      </MainContainer>
    </>
  );
}

export default App;
