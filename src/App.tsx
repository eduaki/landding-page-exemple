import { GlobalStyles, MainContainer } from "./GlobalStyles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <MainContent />
        <GlobalStyles />
      </MainContainer>
    </>
  );
}

export default App;
