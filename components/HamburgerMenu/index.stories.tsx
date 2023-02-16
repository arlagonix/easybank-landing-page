import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global/theme";
import GlobalStyle from "../../global/GlobalStyle";

import HamburgerMenu from ".";

export default {
  title: "Hamburger Menu",
  component: HamburgerMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: { clickHandler: { action: "clicked" } },
} as ComponentMeta<typeof HamburgerMenu>;

const Template: ComponentStory<typeof HamburgerMenu> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HamburgerMenu {...args} />
  </ThemeProvider>
);

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
