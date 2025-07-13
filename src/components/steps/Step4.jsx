import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  padding-inline: var(--space-sm);

  @media (min-width: 48rem) {
    padding-inline: 0;
  }
`;

const StyledFinishingUp = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-lg) var(--space-md);
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
  }
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: var(--space-xs);
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

const FinishWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  border-radius: 8px;
  padding-inline: var(--space-sm);
  padding-block: 0.875rem;
  margin-block-start: var(--space-md);
  background: var(--blue-50);
  width: 100%;

  @media (min-width: 48rem) {
    padding-inline: var(--space-md);
    padding-block: 1.3125rem;
    margin-block-start: var(--space-xl);
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlanWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
`;

const Plan = styled.h2`
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  line-height: var(--lh-tight);
  color: var(--blue-950);
`;

const PlanTotal = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  line-height: var(--lh-tight);
  color: var(--blue-950);
`;

const TotalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--space-md);
  margin-block-start: var(--space-md);
  width: 100%;

  @media (min-width: 48rem) {
    margin-block-start: var(--space-lg);
  }
`;

const TotalText = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--gray-500);
`;

const TotalAmount = styled.p`
  font-weight: var(--fw-bold);
  font-size: 1.25rem;
  line-height: var(--lh-tight);
  color: var(--purple-600);
`;

const ChangeBtn = styled.button`
  background: transparent;
  border: transparent;
  text-decoration: underline;
  padding: 0;
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--gray-500);
`;

const AddOnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

const AddOnsText = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--gray-500);
`;

const AddOnsAmt = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--blue-950);
`;

const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid var(--gray-500);
  mix-blend-mode: normal;
  opacity: 0.2;
`;

const BtnsWrapDesktop = styled.div`
  display: none;

  @media (min-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-block-start: 125px;
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

function FinishingUp({ billing, nextStep, prevStep, handlePlanChange }) {
  return (
    <Wrapper>
      <StyledFinishingUp>
        <FormHeader>
          <Heading>Finishing up</Heading>
          <Description>
            Double-check everything looks OK before confirming.
          </Description>
        </FormHeader>

        <FinishWrap>
          <Item>
            <PlanWrap>
              <Plan>
                Arcade ({billing === "monthly" ? "Monthly" : "Yearly"})
              </Plan>
              <ChangeBtn onClick={handlePlanChange}>Change</ChangeBtn>
            </PlanWrap>

            <PlanTotal>{billing === "monthly" ? "$9/mo" : "$90/yr"}</PlanTotal>
          </Item>

          <Hr />

          <AddOnsWrap>
            <Item>
              <AddOnsText>Online service</AddOnsText>
              <AddOnsAmt>
                {billing === "monthly" ? "+$1/mo" : "+$10/yr"}
              </AddOnsAmt>
            </Item>

            <Item>
              <AddOnsText>Larger storage</AddOnsText>
              <AddOnsAmt>
                {billing === "monthly" ? "+$2/mo" : "+$20/yr"}
              </AddOnsAmt>
            </Item>
          </AddOnsWrap>
        </FinishWrap>

        <TotalWrap>
          <TotalText>Total (per month/year)</TotalText>
          <TotalAmount>
            {billing === "monthly" ? "+$12/mo" : "+$120/yr"}
          </TotalAmount>
        </TotalWrap>

        <BtnsWrapDesktop>
          <Button onClick={prevStep} $variation="secondary">
            Go Back
          </Button>

          <WrapDesk>
            <Button onClick={nextStep} $variation="confirm">
              Confirm
            </Button>
          </WrapDesk>
        </BtnsWrapDesktop>

        <BtnsWrapMobile>
          <BtnWrap>
            <Button onClick={prevStep} $variation="secondary">
              Go Back
            </Button>

            <Button onClick={nextStep} $variation="confirm">
              Confirm
            </Button>
          </BtnWrap>
        </BtnsWrapMobile>
      </StyledFinishingUp>
    </Wrapper>
  );
}

export default FinishingUp;
