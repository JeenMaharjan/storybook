import type { Meta, StoryObj } from "@storybook/preact";
import type { ComponentProps } from "preact";
import { TextInput } from "../components/Input/TextInput";

type StoryProps = ComponentProps<typeof TextInput>;

const meta: Meta<StoryProps> = {
    
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
     onInput: { action: "input" },
    status: { options: ["default", "error", "success"], control: { type: "select" } },
    disabled: { control: "boolean" },
    label: { control: "text" },
    placeholder: { control: "text" },
    message: { control: "text" },
  },
  args: {
    label: "Email",
    placeholder: "you@example.com",
    status: "default",
    disabled: false,
    message: "We’ll never share your email.",
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    
  }
};

export const FocusHint: Story = {
  args: { message: "Click the field to see focus ring." },
};

export const Filled: Story = {
  args: { defaultValue: "hello@brand.com" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "disabled@brand.com" },
};

export const Error: Story = {
  args: { status: "error", message: "Please enter a valid email address." },
};

export const Success: Story = {
  args: { status: "success", message: "Looks good." },
};
