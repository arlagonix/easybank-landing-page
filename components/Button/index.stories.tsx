import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global/theme";
import GlobalStyle from "../../global/GlobalStyle";

import Button from ".";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button {...args}>{args.children}</Button>
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  children: "Request Invite Invite",
};
