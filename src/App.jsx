import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Form from "./components/Form";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Container>
          <Form />
        </Container>
      </main>
    </>
  );
}

export default App;
