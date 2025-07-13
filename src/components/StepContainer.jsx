import styled from "styled-components";

const StyledStepContainer = styled.div`
  background-image: url("/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 10.75rem;
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  padding-block-start: var(--space-lg);
  min-width: 17.125rem;

  @media (min-width: 48rem) {
    background-image: url("/images/bg-sidebar-desktop.svg");
    min-height: 35.5rem;
    flex-direction: column;
    justify-content: flex-start;
    padding-block: var(--space-xl);
    padding-inline: 1.75rem;
    gap: var(--space-lg);
  }
`;

const StepItem = styled.div`
  height: fit-content;

  @media (min-width: 48rem) {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
`;

const StepNumberContainer = styled.div`
  width: 2.0625rem;
  height: 2.0625rem;
  border: ${({ $active }) =>
    $active ? "1px solid transparent" : "1px solid var(--white)"};
  border-radius: 16.5px;
  background: ${({ $active }) => ($active ? "var(--blue-200)" : "transparent")};
  display: grid;
  place-items: center;
`;

const StepTextContainer = styled.div`
  display: none;

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StepTitle = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-xs);
  line-height: var(--lh-tight);
  text-transform: uppercase;
  color: var(--blue-300);
`;

const StepDescription = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--white);
`;

const StepNumber = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  letter-spacing: 1px;
  color: ${({ $active }) => ($active ? "var(--blue-950)" : "var(--white)")};
`;

function StepContainer({ step }) {
  return (
    <StyledStepContainer>
      <StepItem>
        <StepNumberContainer $active={step === 1}>
          <StepNumber $active={step === 1}>1</StepNumber>
        </StepNumberContainer>

        <StepTextContainer>
          <StepTitle>Step 1</StepTitle>
          <StepDescription>Your info</StepDescription>
        </StepTextContainer>
      </StepItem>

      <StepItem>
        <StepNumberContainer $active={step === 2}>
          <StepNumber $active={step === 2}>2</StepNumber>
        </StepNumberContainer>

        <StepTextContainer>
          <StepTitle>Step 2</StepTitle>
          <StepDescription>Select plan</StepDescription>
        </StepTextContainer>
      </StepItem>

      <StepItem>
        <StepNumberContainer $active={step === 3}>
          <StepNumber $active={step === 3}>3</StepNumber>
        </StepNumberContainer>

        <StepTextContainer>
          <StepTitle>Step 3</StepTitle>
          <StepDescription>Add-ons</StepDescription>
        </StepTextContainer>
      </StepItem>

      <StepItem>
        <StepNumberContainer $active={step === 4}>
          <StepNumber $active={step === 4}>4</StepNumber>
        </StepNumberContainer>

        <StepTextContainer>
          <StepTitle>Step 4</StepTitle>
          <StepDescription>Summary</StepDescription>
        </StepTextContainer>
      </StepItem>
    </StyledStepContainer>
  );
}

export default StepContainer;
