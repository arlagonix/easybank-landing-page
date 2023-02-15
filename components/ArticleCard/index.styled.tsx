import styled from "styled-components";
import { convertPxToRem } from "../../utils/convertPxToRem";
import { convertFontWeight } from "../../utils/fontWeightConverter";

export const ArticleCard = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  border-radius: ${convertPxToRem("8px")};
  transition: 0.3s ease;
  cursor: pointer;
  height: 100%;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 32px rgb(0 0 0 / 0.15);

      h3 {
        color: ${({ theme }) => theme.colors.brightCyan};
        text-decoration-color: initial;
      }

      img {
        scale: 1.1;
      }
    }

    &:active {
      scale: 0.95;
    }
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    user-select: none;
    transition: scale 0.3s ease;
  }
`;

export const ContentWrapper = styled.div`
  padding: ${convertPxToRem("24px")};
  display: flex;
  flex-direction: column;
  gap: ${convertPxToRem("12px")};

  p:nth-of-type(1) {
    font-size: ${convertPxToRem("12px")};
    color: ${({ theme }) => theme.colors.grayOne};
    font-weight: ${convertFontWeight("light")};
  }

  h3 {
    line-height: 125%;
    font-size: ${convertPxToRem("16px")};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${convertFontWeight("light")};
    transition: 0.3s ease;
    position: relative;

    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: ${convertPxToRem("4px")};
    text-decoration-thickness: ${convertPxToRem("1.5px")};
  }

  p:nth-of-type(2) {
    line-height: 150%;
    font-size: ${convertPxToRem("14px")};
    color: ${({ theme }) => theme.colors.grayOne};
    font-weight: ${convertFontWeight("regular")};
  }
`;
