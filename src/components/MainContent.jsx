import { useState } from "react";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StepContainer from "./StepContainer";
import PersonalInfo from "../components/steps/Step1";
import Plans from "../components/steps/Step2";
import AddOns from "../components/steps/Step3";
import FinishingUp from "../components/steps/Step4";
import ThankYou from "../components/steps/Step5";

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

const Form = styled.form`
  width: 100%;

  @media (min-width: 67.5rem) {
    min-width: 28.125rem;
  }
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: yup.string().email("Invalid email").required("Email is required"),

  number: yup
    .string()
    .required("Phone number is required")
    .test(
      "len",
      "Must have at least 10 digits",
      (value) => value && value.replace(/\D/g, "").length >= 10
    ),
});

function MainContent() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      number: "",
      plan: "arcade",
      duration: "monthly",
    },
  });

  const [step, setStep] = useState(1);
  const [billing, setBilling] = useState("monthly");
  const [showDiscount, setShowDiscount] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handlePlanChange = () => setStep((prev) => prev - 2);

  const handleBillingChange = (event) => {
    setBilling(event.target.value);
    setShowDiscount((prev) => !prev);
  };

  return (
    <StyledMainContent>
      <StepContainer step={step} />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(() => nextStep())}>
          {step === 1 && <PersonalInfo nextStep={nextStep} />}
          {step === 2 && (
            <Plans
              nextStep={nextStep}
              prevStep={prevStep}
              billing={billing}
              setBilling={setBilling}
              showDiscount={showDiscount}
              setShowDiscount={setShowDiscount}
              handleBillingChange={handleBillingChange}
            />
          )}
          {step === 3 && (
            <AddOns nextStep={nextStep} prevStep={prevStep} billing={billing} />
          )}
          {step === 4 && (
            <FinishingUp
              nextStep={nextStep}
              prevStep={prevStep}
              handlePlanChange={handlePlanChange}
              billing={billing}
            />
          )}
          {step === 5 && <ThankYou />}
        </Form>
      </FormProvider>
    </StyledMainContent>
  );
}

export default MainContent;
