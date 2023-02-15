import styled, { css } from "styled-components";
import { convertPxToRem } from "../../utils/convertPxToRem";

type HamburgerProps = {
  /** Passed from the parent component */
  active: boolean;
};

export const Hamburger = styled.button<HamburgerProps>`
  cursor: pointer;
  border: none;
  background: transparent;

  --translateY: ${convertPxToRem("10px")};
  --rotate: 45deg;

  ${({ active }) => {
    if (active)
      return css`
        span:nth-of-type(1) {
          transform: translateY(calc(1 * var(--translateY))) rotate(calc(1 * var(--rotate)));
        }

        span:nth-of-type(2) {
          opacity: 0;
        }

        span:nth-of-type(3) {
          transform: translateY(calc(-1 * var(--translateY))) rotate(calc(-1 * var(--rotate)));
        }
      `;
  }}
`;

export const Line = styled.span`
  width: ${convertPxToRem("32px")};
  height: ${convertPxToRem("2px")};
  background-color: black;
  display: block;
  margin: ${convertPxToRem("8px")} auto;
  transition: all 0.3s ease;
`;
