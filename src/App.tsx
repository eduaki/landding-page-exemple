import { GlobalStyles, MainContainer, Wrapper } from "./GlobalStyles";
import FeaturesPanel from "./components/FeaturesPanel";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProsArea from "./components/ProsArea";
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
        <ProsArea />
        <GlobalStyles />
      </MainContainer>
    </>
  );
}

export default App;
