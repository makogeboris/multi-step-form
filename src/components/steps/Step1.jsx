import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  padding-inline: var(--space-sm);

  @media (min-width: 48rem) {
    padding-inline: 0;
  }
`;

const StyledPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-lg) var(--space-md);
  gap: var(--space-md);
  background: var(--white);
  box-shadow: var(--shadow);
  border-radius: 10px;
  width: 100%;
  max-width: 33.75rem;
  margin: 0 auto;
  margin-top: -76px;
  margin-block-end: 12.875rem;
  align-items: center;

  @media (min-width: 48rem) {
    margin: 0;
    padding: 0;
    padding-block-start: var(--space-lg);
    box-shadow: none;
    max-width: 28.125rem;
    gap: var(--space-lg);
  }

  @media (min-width: 67.5rem) {
    gap: var(--space-xl);
  }
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

const Heading = styled.h1`
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  line-height: var(--lh-tight);
  color: var(--blue-950);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-xl);
  }
`;

const Description = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-md);
  line-height: var(--lh-base);
  color: var(--gray-500);
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;

  @media (min-width: 48rem) {
    gap: var(--space-md);
  }
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

const LabelErrWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ErrorMessage = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-xs);
  line-height: var(--lh-tight);
  letter-spacing: 1px;
  color: var(--red-500);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-sm);
  }
`;

const Label = styled.label`
  font-weight: var(--fw-regular);
  font-size: var(--fs-xs);
  line-height: var(--lh-tight);
  color: var(--blue-950);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-sm);
  }
`;

const Input = styled.input`
  padding: var(--space-xs) var(--space-sm);
  background: var(--white);
  border: 1px solid var(--purple-200);
  /* border: 1px solid var(--red-500); */
  border-radius: 4px;
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--blue-950);
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover:not(:focus-visible) {
    border: 1px solid var(--purple-600);
  }

  &:focus-visible {
    outline: 2px solid var(--blue-950);
  }

  &::placeholder {
    line-height: var(--lh-base);
    color: var(--gray-500);
  }

  @media (min-width: 26.875rem) {
    padding: 0.875rem var(--space-sm);
    font-size: var(--fs-md);
    border-radius: 8px;
  }
`;

const BtnsWrapDesktop = styled.div`
  display: none;

  @media (min-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-block-start: var(--space-xl);
  }
`;

const WrapDesk = styled.div`
  justify-self: flex-end;
`;

const BtnWrap = styled.div`
  width: 33.75rem;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
`;

const BtnsWrapMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  background: var(--white);
  margin-block-start: 8.4375rem;
  padding: var(--space-sm);
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (min-width: 48rem) {
    display: none;
  }
`;

function PersonalInfo({ nextStep }) {
  return (
    <Wrapper>
      <StyledPersonalInfo>
        <FormHeader>
          <Heading>Personal info</Heading>
          <Description>
            Please provide your name, email address, and phone number.
          </Description>
        </FormHeader>

        <FormFields>
          <FieldsContainer>
            <LabelErrWrap>
              <Label htmlFor="name">Name</Label>
              {/* <ErrorMessage>This field is required</ErrorMessage> */}
            </LabelErrWrap>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
            />
          </FieldsContainer>

          <FieldsContainer>
            <LabelErrWrap>
              <Label htmlFor="email">Email Address</Label>
              {/* <ErrorMessage>This field is required</ErrorMessage> */}
            </LabelErrWrap>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </FieldsContainer>

          <FieldsContainer>
            <LabelErrWrap>
              <Label htmlFor="number">Phone Number</Label>
              {/* <ErrorMessage>This field is required</ErrorMessage> */}
            </LabelErrWrap>
            <Input
              type="number"
              name="number"
              id="number"
              placeholder="e.g. +1 234 567 890"
            />
          </FieldsContainer>
        </FormFields>

        <BtnsWrapDesktop>
          <WrapDesk>
            <Button onClick={nextStep} $variation="primary">
              Next Step
            </Button>
          </WrapDesk>
        </BtnsWrapDesktop>

        <BtnsWrapMobile>
          <BtnWrap>
            <Button onClick={nextStep} $variation="primary">
              Next Step
            </Button>
          </BtnWrap>
        </BtnsWrapMobile>
      </StyledPersonalInfo>
    </Wrapper>
  );
}

export default PersonalInfo;
