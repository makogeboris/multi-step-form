import styled, { css } from "styled-components";

const variations = {
  primary: css`
    background: var(--blue-950);
    color: var(--white);

    &:hover {
      background: var(--blue-700);
    }

    &:focus-visible {
      outline: 2px solid var(--blue-950);
      outline-offset: 1px;
    }
  `,

  secondary: css`
    background: var(--white);
    color: var(--gray-500);

    &:hover {
      color: var(--blue-950);
    }

    &:focus-visible {
      outline: 2px solid var(--blue-950);
      outline-offset: -2px;
    }
  `,

  confirm: css`
    background: var(--purple-600);
    color: var(--white);

    &:hover {
      background: var(--blue-700);
    }

    &:focus-visible {
      outline: 2px solid var(--blue-950);
      outline-offset: 1px;
    }
  `,
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.5625rem var(--space-sm);
  border: 2px solid transparent;
  font-weight: 500;
  font-size: var(--fs-sm);
  line-height: 150%;
  transition: all ease 0.3s;

  @media (min-width: 26.875rem) {
    border-radius: 8px;
    padding: var(--space-sm) var(--space-md);
    font-size: var(--fs-md);
    line-height: 120%;
  }

  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
};

export default Button;
