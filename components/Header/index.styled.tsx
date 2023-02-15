import styled, { css } from "styled-components";
import { convertPxToRem } from "../../utils/convertPxToRem";

type HeaderWrapperProps = {
  isScrolledY: boolean;
};

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  position: fixed;
  z-index: 2;
  width: 100%;
  transition: 0.3s linear;
  backdrop-filter: blur(6px);

  ${({ isScrolledY }) => {
    if (!isScrolledY)
      return css`
        background-color: ${({ theme }) => theme.colors.white};
      `;
    else
      return css`
        background-color: rgb(255 255 255 / 0.75);
      `;
  }}
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.sizes.standardWidth};
  min-height: ${convertPxToRem("80px")};
  margin: 0 auto;
  padding: 0 ${convertPxToRem("16px")};
  z-index: 2;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    min-height: ${convertPxToRem("60px")};
  }
`;

export const NavWrapper = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    list-style: none;
    gap: ${convertPxToRem("32px")};
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    display: none;
  }
`;

export const RightBlock = styled.div`
  // Button "Request invite"
  & > :nth-child(1) {
    @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      display: none;
    }
  }

  // Hamburger menu
  & > :nth-child(2) {
    @media screen and (min-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      display: none;
    }
  }
`;

const bottomLineTransparent = css`
  ::after {
    position: absolute;
    content: "";

    bottom: 0;
    left: 50%;
    translate: -50% 0;
    height: ${convertPxToRem("4px")};
    opacity: 0;
    width: 0;
    background: ${({ theme }) => theme.gradients.standard};
    border-radius: ${convertPxToRem("16px")};
    transition: ease 0.3s;
  }
`;

export const NavItem = styled.li`
  opacity: 0;
  font-size: ${convertPxToRem("16px")};
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 ${convertPxToRem("8px")};
  cursor: pointer;
  ${bottomLineTransparent}

  :hover {
    ::after {
      opacity: 1;
      width: 100%;
    }
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const ModalNavItem = styled.li`
  font-size: ${convertPxToRem("24px")};
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: ${convertPxToRem("16px")};
  cursor: pointer;

  a {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

type ModalMenuProps = {
  /** If `true` then the modal is shown */
  show?: boolean;
};

export const ModalMenu = styled.div<ModalMenuProps>`
  // Styles for the modal background
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100vh;
  background-color: rgb(0 0 0 / 0.15);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  ${({ show }) => {
    if (show)
      return css`
        pointer-events: initial;
        opacity: 1;
      `;
    else
      return css`
        pointer-events: none;
        opacity: 0;
      `;
  }}

  // Styles for the modal itself
  & > :nth-child(1) {
    width: calc(100% - 1rem * 2);
    margin: ${convertPxToRem("16px")} auto;
    background: white;
    display: flex;
    flex-direction: column;
    padding: ${convertPxToRem("16px")} 0;
    border-radius: ${convertPxToRem("8px")};
    transition: 0.3s ease;

    ${({ show }) => {
      if (show)
        return css`
          scale: 1 1;
          translate: 0;
        `;
      else
        return css`
          scale: 1 0;
          translate: 0 -10rem;

          & a {
            display: none;
          }
        `;
    }}
  }
`;
