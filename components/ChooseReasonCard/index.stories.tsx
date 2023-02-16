import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global/theme";
import GlobalStyle from "../../global/GlobalStyle";

import onlineBanking from "../../public/onlineBanking.svg";
import simpleBudgeting from "../../public/simpleBudgeting.svg";
import fastOnboarding from "../../public/fastOnboarding.svg";
import openApi from "../../public/openApi.svg";

import ChooseReasonCard from ".";

// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
// Turn off all optimizations so that NextJS Image component might work in Storybook
import * as NextImage from "next/image";
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: "Choose Reason Card",
  component: ChooseReasonCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    imageSrc: {
      options: [onlineBanking, simpleBudgeting, fastOnboarding, openApi],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ChooseReasonCard>;

const Template: ComponentStory<typeof ChooseReasonCard> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ChooseReasonCard {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  imageSrc: onlineBanking,
  name: "Online Banking",
  description:
    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
};
