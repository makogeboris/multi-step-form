import styled from "styled-components";
import icon from "../../images/icon-thank-you.svg";

const Wrapper = styled.div`
  padding-inline: var(--space-sm);

  @media (min-width: 48rem) {
    padding-inline: 0;
  }
`;

const StyledThankYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding-inline: var(--space-md);
  padding-block: 5.0625rem;
  background: var(--white);
  box-shadow: var(--shadow);
  border-radius: 10px;
  width: 100%;
  max-width: 33.75rem;
  margin: 0 auto;
  margin-top: -76px;
  margin-block-end: 12.875rem;

  @media (min-width: 48rem) {
    margin: 0;
    padding: 0;
    padding-block-start: 8.75rem;
    box-shadow: none;
    max-width: 28.125rem;
    gap: var(--space-lg);
  }
`;

const Img = styled.img`
  width: 56px;

  @media (min-width: 26.875rem) {
    width: 80px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);

  @media (min-width: 26.875rem) {
    gap: var(--space-sm);
  }
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

function ThankYou() {
  return (
    <Wrapper>
      <StyledThankYou>
        <Img src={icon} alt="" />

        <MessageContainer>
          <Heading>Thank you!</Heading>
          <Description>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Description>
        </MessageContainer>
      </StyledThankYou>
    </Wrapper>
  );
}

export default ThankYou;
