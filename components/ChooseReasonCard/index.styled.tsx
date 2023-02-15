import styled from "styled-components";
import { convertPxToRem } from "../../utils/convertPxToRem";
import { convertFontWeight } from "../../utils/fontWeightConverter";

export const ChooseReason = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${convertPxToRem("24px")};

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    align-items: center;
  }

  h3 {
    font-size: ${convertPxToRem("24px")};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${convertFontWeight("light")};

    @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      font-size: ${convertPxToRem("20px")};
    }
  }

  p {
    line-height: 150%;
    font-size: ${convertPxToRem("16px")};
    color: ${({ theme }) => theme.colors.grayOne};
    font-weight: ${convertFontWeight("regular")};

    @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      max-width: 45ch;
    }
  }
`;
