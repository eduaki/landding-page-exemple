import { GlobalStyles, MainContainer } from "./GlobalStyles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SuportInfo from "./components/SuportInfo";

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <MainContent />
        <SuportInfo />
        <GlobalStyles />
      </MainContainer>
    </>
  );
}

export default App;
