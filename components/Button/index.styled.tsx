import styled, { css } from "styled-components";
import { convertPxToRem } from "../../utils/convertPxToRem";
import { convertFontWeight } from "../../utils/fontWeightConverter";

type ButtonProps = {
  /** For animejs, helps to avoid clumsy animation flickering at the initial page load
   * Is passed from the parent component
   */
  initiallyInvisible?: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-size: ${convertPxToRem("16px")};
  border-radius: 9999px;
  padding: ${convertPxToRem("12px")} ${convertPxToRem("40px")};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${convertFontWeight("bold")};
  border: none;
  background: ${({ theme }) => theme.gradients.standard};
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: 0.3s ease;

  @media (hover: hover) {
    :hover {
      scale: 1.1;
      transition: 0.35s cubic-bezier(0.5, 0.5, 0.5, 2.5);
    }

    :active {
      scale: 0.95;
      transition: 0.3s ease;
    }
  }

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.gradients.standard};
    filter: blur(8px);
    transition: 0.3s ease;
    border-radius: inherit;
    opacity: 0;
  }

  @media (hover: hover) {
    &:hover::before {
      opacity: 1;
      filter: blur(32px);
    }
  }

  /* 
* Prevents issues when the parent creates a 
* stacking context. (For example, using the transform
* property )
*/
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }

  ${({ initiallyInvisible }) => {
    if (initiallyInvisible)
      return css`
        opacity: 0;
      `;
  }}
`;
