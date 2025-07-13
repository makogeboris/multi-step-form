import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  padding-inline: var(--space-sm);

  @media (min-width: 48rem) {
    padding-inline: 0;
  }
`;

const StyledAddOns = styled.div`
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
  text-align: left;
  width: 100%;
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

const AddOnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;

  @media (min-width: 26.875rem) {
    gap: var(--space-sm);
  }
`;

const AddOn = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xs);
  border-radius: 8px;
  border: 1px solid var(--purple-200);
  background: transparent;
  padding-inline: var(--space-sm);
  padding-block: 0.75rem;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    border: 1px solid var(--purple-600);
  }

  &:has(input:checked) {
    background: var(--blue-50);
    border: 1px solid var(--purple-600);
  }

  @media (min-width: 48rem) {
    padding-inline: var(--space-md);
    padding-block: 1.125rem;
  }

  @media (min-width: 56.1875rem) {
    gap: 3rem;
  }
`;

const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  @media (min-width: 48rem) {
    gap: var(--space-md);
  }
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  height: 20px;
  width: 20px;
  accent-color: var(--purple-600);
  cursor: pointer;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid var(--blue-950);
    outline-offset: 1px;
  }
`;

const Label = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  line-height: var(--lh-tight);
  color: var(--blue-950);

  @media (min-width: 48rem) {
    gap: var(--space-xs);
  }
`;

const Span = styled.span`
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--gray-500);
`;

const LabelPrice = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--purple-600);
`;

const BtnsWrapDesktop = styled.div`
  display: none;

  @media (min-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-block-start: var(--space-lg);
  }
`;

const WrapDesk = styled.div`
  justify-self: flex-end;
`;

const BtnWrap = styled.div`
  width: 33.75rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const BtnsWrapMobile = styled.div`
  display: flex;
  justify-content: space-between;
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

function AddOns({ billing, nextStep, prevStep }) {
  return (
    <Wrapper>
      <StyledAddOns>
        <FormHeader>
          <Heading>Pick add-ons</Heading>
          <Description>
            Add-ons help enhance your gaming experience.
          </Description>
        </FormHeader>

        <AddOnsWrap>
          <AddOn htmlFor="online">
            <BoxWrap>
              {<CheckboxInput type="checkbox" name="online" id="online" />}
              <Label>
                Online service
                <Span>Access to multiplayer games</Span>
              </Label>
            </BoxWrap>

            <LabelPrice>
              {billing === "monthly" ? "+$1/mo" : "+$10/yr"}
            </LabelPrice>
          </AddOn>

          <AddOn htmlFor="storage">
            <BoxWrap>
              <CheckboxInput type="checkbox" name="storage" id="storage" />
              <Label>
                Larger storage
                <Span>Extra 1TB of cloud save</Span>
              </Label>
            </BoxWrap>

            <LabelPrice>
              {billing === "monthly" ? "+$2/mo" : "+$20/yr"}
            </LabelPrice>
          </AddOn>

          <AddOn htmlFor="customize">
            <BoxWrap>
              <CheckboxInput type="checkbox" name="customize" id="customize" />
              <Label>
                Customizable Profile
                <Span>Custom theme on your profile</Span>
              </Label>
            </BoxWrap>

            <LabelPrice>
              {billing === "monthly" ? "+$2/mo" : "+$20/yr"}
            </LabelPrice>
          </AddOn>
        </AddOnsWrap>

        <BtnsWrapDesktop>
          <Button onClick={prevStep} $variation="secondary">
            Go Back
          </Button>

          <WrapDesk>
            <Button onClick={nextStep} $variation="primary">
              Next Step
            </Button>
          </WrapDesk>
        </BtnsWrapDesktop>

        <BtnsWrapMobile>
          <BtnWrap>
            <Button onClick={prevStep} $variation="secondary">
              Go Back
            </Button>

            <Button onClick={nextStep} $variation="primary">
              Next Step
            </Button>
          </BtnWrap>
        </BtnsWrapMobile>
      </StyledAddOns>
    </Wrapper>
  );
}

export default AddOns;
