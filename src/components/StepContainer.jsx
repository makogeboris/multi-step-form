import styled from "styled-components";

const StyledStepContainer = styled.div`
  background-image: url("/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 172px;

  @media (min-width: 600px) {
    background-image: url("/images/bg-sidebar-desktop.svg");
    max-width: 274px;
    min-height: 568px;
  }
`;

function StepContainer() {
  return (
    <StyledStepContainer>
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
    </StyledStepContainer>
  );
}

export default StepContainer;
