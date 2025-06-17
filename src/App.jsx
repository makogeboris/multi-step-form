import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import MainContent from "./components/MainContent";

const Main = styled.main`
  @media (min-width: 48rem) {
    padding-inline: var(--space-xl);
    padding-block: var(--space-2xl);
  }
`;

const Container = styled.div``;

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Container>
          <MainContent />
        </Container>
      </Main>
    </>
  );
}

export default App;
