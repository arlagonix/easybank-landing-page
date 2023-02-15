import styled, { css } from "styled-components";
import { convertPxToRem } from "../utils/convertPxToRem";
import { convertFontWeight } from "../utils/fontWeightConverter";

// REUSED SETS OF STYLES

const paragraphStyles = css`
  line-height: 150%;
  color: ${({ theme }) => theme.colors.grayOne};
  font-weight: ${convertFontWeight("regular")};
`;

const sectionLayoutStyles = css`
  min-height: ${convertPxToRem(`650px`)};
  max-width: ${({ theme }) => theme.sizes.standardWidth};
  padding: ${convertPxToRem("96px")} ${convertPxToRem("16px")};
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    min-height: auto;
    padding: ${convertPxToRem("32px")} ${convertPxToRem("16px")};
  }
`;

const subheaderStyles = css`
  font-size: ${convertPxToRem("40px")};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${convertFontWeight("light")};

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    text-align: center;
    font-size: ${convertPxToRem("24px")};
  }
`;

// INTRODUCTION

export const IntroductionSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteOne};
  position: relative;
`;

export const IntroductionSection = styled.section`
  ${sectionLayoutStyles}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${convertPxToRem("32px")};

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    align-items: center;
    margin-top: ${convertPxToRem("96px")};
  }

  position: relative;

  h1 {
    font-size: ${convertPxToRem("54px")};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${convertFontWeight("light")};
    max-width: 15ch;

    @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      text-align: center;
      font-size: ${convertPxToRem("32px")};
      max-width: unset;
    }
  }

  p {
    ${paragraphStyles}
    font-size: ${convertPxToRem("18px")};
    max-width: 35ch;

    @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      text-align: center;
      max-width: 45ch;
    }
  }
`;

export const AppIllustrationWrapper = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 1;
  right: calc(50% - ${convertPxToRem("1250px")});
  top: ${convertPxToRem("-275px")};

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    display: none;
  }
`;

// WHY CHOOSE EASY BANK

export const WhyChooseSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteTwo};
`;

export const WhyChooseSection = styled.section`
  ${sectionLayoutStyles}

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    ${subheaderStyles}
  }

  p {
    ${paragraphStyles}
    font-size: ${convertPxToRem("16px")};
    max-width: 50ch;

    @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
      text-align: center;
    }
  }
`;

export const WhyChooseSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${convertPxToRem("16px")};
`;

export const ChooseReasonListWrapper = styled.div`
  display: flex;
  gap: ${convertPxToRem("24px")};
  justify-content: space-between;
  padding-top: ${convertPxToRem("64px")};

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    flex-direction: column;
  }
`;

// LATEST ARTICLES

export const ArticlesSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteOne};
`;

export const ArticlesSection = styled.section`
  ${sectionLayoutStyles}
  padding: ${convertPxToRem("96px")} ${convertPxToRem("16px")};

  h2 {
    ${subheaderStyles}
  }
`;

export const ArticlesListWrapper = styled.div`
  display: flex;
  gap: ${convertPxToRem("24px")};
  justify-content: space-between;
  padding-top: ${convertPxToRem("64px")};

  @media screen and (max-width: ${({ theme }) => theme.sizes.mediumWidth}) {
    flex-direction: column;
    padding-top: ${convertPxToRem("32px")};
  }
`;
