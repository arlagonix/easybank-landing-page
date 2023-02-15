import styled, { css } from "styled-components";
import { convertPxToRem } from "../../utils/convertPxToRem";
import { convertFontWeight } from "../../utils/fontWeightConverter";

export const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${convertPxToRem("32px")} ${convertPxToRem("16px")};

  @media screen and (min-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    height: ${convertPxToRem("180px")};
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    min-height: ${convertPxToRem("180px")};
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: ${convertPxToRem("128px")};
  max-width: ${({ theme }) => theme.sizes.standardWidth};
  margin: 0 auto;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    flex-direction: column;
    gap: ${convertPxToRem("24px")};
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    align-items: center;
    gap: ${convertPxToRem("24px")};
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: ${convertPxToRem("16px")};
`;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${convertPxToRem("16px")};
  font-weight: ${convertFontWeight("regular")};
  line-height: 150%;
  transition: 0.3s color;
  position: relative;
  align-self: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    align-self: stretch;
    text-align: center;
  }

  &::before {
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    height: ${convertPxToRem("2px")};
    background-color: ${({ theme }) => theme.colors.limeGreen};
    position: absolute;
    opacity: 0;
    scale: 0 1;
    transition: 0.3s ease;
  }

  @media (hover: hover) {
    :hover {
      color: ${({ theme }) => theme.colors.limeGreen};

      ::before {
        scale: 1;
        opacity: 1;
      }
    }
  }
`;

export const CustomWrapper = styled(Wrapper)`
  align-items: flex-end;
  flex-grow: 1;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${convertPxToRem("24px")};
  }
`;

export const RightsReserved = styled.p`
  color: ${({ theme }) => theme.colors.grayTwo};
  font-size: ${convertPxToRem("16px")};
  font-weight: ${convertFontWeight("regular")};
  line-height: 150%;
`;
