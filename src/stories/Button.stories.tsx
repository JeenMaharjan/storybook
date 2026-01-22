import type { Meta, StoryObj } from "@storybook/preact";
import type { ComponentProps } from "preact";
import { Button } from "../components/Button/Button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    onClick: () => {},
    children: "Hello",
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = { args: {
  variant: "primary",
} };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Tertiary: Story = { args: { variant: "tertiary" } };
