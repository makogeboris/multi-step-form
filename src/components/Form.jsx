import styled from "styled-components";
import StepContainer from "./StepContainer";
import MainContent from "./MainContent";

const StyledForm = styled.form`
  width: 100%;
  max-width: 940px;
`;

function Form() {
  return (
    <StyledForm>
      <StepContainer />
      <MainContent />
    </StyledForm>
  );
}

export default Form;
