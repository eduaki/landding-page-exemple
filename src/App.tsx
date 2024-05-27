import { GlobalStyles, MainContainer, Wrapper } from "./GlobalStyles";
import FeaturesPanel from "./components/FeaturesPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PlansList from "./components/PlansList";
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
        <PlansList />
        <Footer />
        <GlobalStyles />
      </MainContainer>
    </>
  );
}

export default App;
