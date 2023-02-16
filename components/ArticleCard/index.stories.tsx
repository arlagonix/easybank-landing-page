import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global/theme";
import GlobalStyle from "../../global/GlobalStyle";

import confetti from "../../public/image-confetti.png";
import currency from "../../public/image-currency.png";
import plane from "../../public/image-plane.png";
import restaurant from "../../public/image-restaurant.png";

import ArticleCard from ".";

// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
// Turn off all optimizations so that NextJS Image component might work in Storybook
import * as NextImage from "next/image";
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: "Article Card",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    imageSrc: {
      options: [confetti, currency, plane, restaurant],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ArticleCard {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  imageSrc: confetti,
  imageAlt: "Confetti",
  author: "John Doe",
  name: "Buy more confetti",
  description: "Here you may buy so much confetti!",
};
