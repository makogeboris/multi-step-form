import styled from "styled-components";
import StepContainer from "./StepContainer";
import Form from "./Form";

const StyledMainContent = styled.div`
  width: 100%;
  display: grid;

  @media (min-width: 48rem) {
    grid-auto-flow: column;
    place-content: center;
    gap: clamp(3rem, 7vw, 7.25rem);
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 15px;
    width: fit-content;
    padding-block: var(--space-sm);
    padding-inline-start: var(--space-sm);
    padding-inline-end: clamp(3rem, 7vw, 6.25rem);
  }
`;

function MainContent() {
  return (
    <StyledMainContent>
      <StepContainer />
      <Form />
    </StyledMainContent>
  );
}

export default MainContent;
