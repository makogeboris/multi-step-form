import styled from "styled-components";
import StepContainer from "./StepContainer";
import Form from "./Form";
import Plans from "./Plans";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import ThankYou from "./ThankYou";
import Button from "./Button";
import { useState } from "react";

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

const BtnsWrapDesktop = styled.div`
  display: none;

  @media (min-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* justify-content: flex-end; */
    margin-block-start: var(--space-2xl);
  }
`;

const WrapDesk = styled.div`
  justify-self: flex-end;
`;

const BtnWrap = styled.div`
  width: 33.75rem;
  display: flex;
  justify-content: space-between;
  /* justify-content: flex-end; */
  margin: 0 auto;
`;

const BtnsWrapMobile = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: flex-end; */
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

function MainContent() {
  const [billing, setBilling] = useState("monthly");
  const [showDiscount, setShowDiscount] = useState(false);

  const handleBillingChange = (event) => {
    setBilling(event.target.value);
    setShowDiscount((prev) => !prev);
  };

  return (
    <StyledMainContent>
      <StepContainer />

      <div>
        {/* <Form /> */}
        <Plans
          billing={billing}
          setBilling={setBilling}
          showDiscount={showDiscount}
          setShowDiscount={setShowDiscount}
          handleBillingChange={handleBillingChange}
        />
        {/* <AddOns billing={billing} /> */}
        {/* <FinishingUp billing={billing} /> */}
        {/* <ThankYou /> */}

        <BtnsWrapDesktop>
          <Button variation="secondary">Go Back</Button>

          <WrapDesk>
            <Button variation="primary">Next Step</Button>
          </WrapDesk>
        </BtnsWrapDesktop>
      </div>

      <BtnsWrapMobile>
        <BtnWrap>
          <Button variation="secondary">Go Back</Button>

          <Button variation="primary">Next Step</Button>
        </BtnWrap>
      </BtnsWrapMobile>
    </StyledMainContent>
  );
}

export default MainContent;
