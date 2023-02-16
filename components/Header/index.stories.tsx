import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global/theme";
import GlobalStyle from "../../global/GlobalStyle";

import Header from ".";

// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
// Turn off all optimizations so that NextJS Image component might work in Storybook
import * as NextImage from "next/image";
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Standard: ComponentStory<typeof Header> = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);
