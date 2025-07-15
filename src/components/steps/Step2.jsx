import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";
import Button from "../Button";

const Wrapper = styled.div`
  padding-inline: var(--space-sm);

  @media (min-width: 48rem) {
    padding-inline: 0;
  }
`;

const StyledPlans = styled.div`
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
    gap: 0;
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

const PlanOptionsContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (min-width: 67.5rem) {
    flex-direction: row;
    gap: 1.125rem;
    margin-block-start: var(--space-xl);
  }
`;

const PlanOption = styled.label`
  width: 100%;
  padding-inline: var(--space-sm);
  padding-block: 1.25rem;
  border: 1px solid var(--purple-200);
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover:not(:focus-visible) {
    border: 1px solid var(--purple-600);
  }

  &:has(input:focus-visible) {
    outline: 1px solid var(--purple-600);
  }

  &:has(input:checked) {
    background: var(--blue-50);
    border: 1px solid var(--purple-600);
  }

  @media (min-width: 67.5rem) {
    padding-block: 1.125rem;
    min-width: 8.625rem;
    min-height: 186px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: var(--space-sm);

  @media (min-width: 67.5rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  z-index: 1;
  cursor: pointer;
`;

const TypeWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanType = styled.h2`
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  line-height: var(--lh-tight);
  color: var(--blue-950);
`;

const PlanPrice = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  color: var(--gray-500);
`;

const Discount = styled.p`
  font-weight: var(--fw-regular);
  font-size: var(--fs-xs);
  line-height: var(--lh-tight);
  color: var(--blue-950);
  margin-top: 0.25rem;

  @media (min-width: 67.5rem) {
    margin-top: var(--space-xs);
  }
`;

const BillingCycle = styled.fieldset`
  padding: 0;
  border: none;
  text-align: center;
  border-radius: 8px;
  background: var(--blue-50);
  padding: 0.875rem;
  width: 100%;

  @media (min-width: 67.5rem) {
    margin-block: var(--space-lg) var(--space-xl);
  }
`;

const Legend = styled.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const SwitcherBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitcherLabel = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  cursor: pointer;
  color: ${({ $active }) => ($active ? "var(--blue-950)" : "var(--gray-500)")};
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 38px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 2;
`;

const Toogle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--blue-950);
  transition: background 0.3s ease;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 12px;
    height: 12px;
    background-color: var(--white);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

const PriceToggle = styled.div`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
  margin-inline: var(--space-md);

  ${CheckboxInput}:checked + ${Toogle}::before {
    transform: translateX(18px);
  }

  ${CheckboxInput}:focus-visible + ${Toogle} {
    outline: 2px solid var(--purple-600);
    outline-offset: 2px;
  }
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  outline: none;
  box-shadow: none;
`;

const BtnsWrapDesktop = styled.div`
  display: none;

  @media (min-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-block-start: var(--space-xl);
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

function Plans({
  billing,
  setBilling,
  showDiscount,
  setShowDiscount,
  handleBillingChange,
  nextStep,
  prevStep,
}) {
  const { register, setValue, watch } = useFormContext();
  const selectedPlan = watch("plan", "arcade");

  return (
    <Wrapper>
      <StyledPlans>
        <FormHeader>
          <Heading>Select your plan</Heading>
          <Description>
            You have the option for monthly or yearly billing.
          </Description>
        </FormHeader>

        <PlanOptionsContainer>
          <Legend>Select your plan</Legend>

          <PlanOption htmlFor="arcade">
            <RadioWrapper>
              <RadioInput
                id="arcade"
                value="arcade"
                {...register("plan")}
                checked={selectedPlan === "arcade"}
              />
              <img src={arcade} />

              <TypeWrap>
                <PlanType>Arcade</PlanType>
                <PlanPrice>
                  {billing === "monthly" ? "$9/mo" : "$90/yr"}
                </PlanPrice>

                {showDiscount && <Discount>2 months free</Discount>}
              </TypeWrap>
            </RadioWrapper>
          </PlanOption>

          <PlanOption htmlFor="advanced">
            <RadioWrapper>
              <RadioInput
                id="advanced"
                value="advanced"
                {...register("plan")}
                checked={selectedPlan === "advanced"}
              />
              <img src={advanced} />

              <TypeWrap>
                <PlanType>Advanced</PlanType>
                <PlanPrice>
                  {billing === "monthly" ? "$12/mo" : "$120/yr"}
                </PlanPrice>

                {showDiscount && <Discount>2 months free</Discount>}
              </TypeWrap>
            </RadioWrapper>
          </PlanOption>

          <PlanOption htmlFor="pro">
            <RadioWrapper>
              <RadioInput
                id="pro"
                value="pro"
                {...register("plan")}
                checked={selectedPlan === "pro"}
              />
              <img src={pro} />

              <TypeWrap>
                <PlanType>Pro</PlanType>
                <PlanPrice>
                  {billing === "monthly" ? "$15/mo" : "$150/yr"}
                </PlanPrice>

                {showDiscount && <Discount>2 months free</Discount>}
              </TypeWrap>
            </RadioWrapper>
          </PlanOption>
        </PlanOptionsContainer>

        <BillingCycle>
          <Legend>Payment plans</Legend>

          <SwitcherBox>
            <SwitcherLabel htmlFor="monthly" $active={billing === "monthly"}>
              Monthly
            </SwitcherLabel>
            <HiddenRadio
              type="radio"
              name="duration"
              id="monthly"
              value="monthly"
              {...register("duration")}
              checked={billing === "monthly"}
              onChange={(e) => {
                handleBillingChange(e);
                setValue("duration", e.target.value);
              }}
            />

            <PriceToggle>
              <CheckboxInput
                checked={billing === "yearly"}
                onChange={() => {
                  const newBilling =
                    billing === "monthly" ? "yearly" : "monthly";
                  setBilling(newBilling);
                  setShowDiscount((prev) => !prev);
                  setValue("duration", newBilling);
                }}
                aria-label="Pricing toggle"
              />
              <Toogle />
            </PriceToggle>

            <HiddenRadio
              type="radio"
              name="duration"
              id="yearly"
              value="yearly"
              {...register("duration")}
              checked={billing === "yearly"}
              onChange={(e) => {
                handleBillingChange(e);
                setValue("duration", e.target.value);
              }}
            />
            <SwitcherLabel htmlFor="yearly" $active={billing === "yearly"}>
              Yearly
            </SwitcherLabel>
          </SwitcherBox>
        </BillingCycle>

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
      </StyledPlans>
    </Wrapper>
  );
}

export default Plans;
