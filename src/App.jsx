import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import MainContent from "./components/MainContent";

const Container = styled.div`
  @media (min-width: 48rem) {
    padding-inline: var(--space-xl);
    padding-block: var(--space-2xl);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Container>
          <MainContent />
        </Container>
      </main>
    </>
  );
}

export default App;
