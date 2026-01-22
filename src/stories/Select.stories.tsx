import type { Meta, StoryObj } from "@storybook/preact";
import type { ComponentProps } from "preact";
import { Select } from "../components/Select/Select";


type StoryProps = ComponentProps<typeof Select>;

const meta: Meta<StoryProps> = {
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    label: "Country",
    placeholder: "Choose one",
    disabled: false,
    options: [
      { label: "UK", value: "uk" },
      { label: "Canada", value: "cd" },
      { label: "USA", value: "us" },
    ],

  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    options: [{
      "label": "UK",
      "value": "uk"
    }, {
      "label": "Canada",
      "value": "cd"
    }, {
      "label": "USA",
      "value": "us"
    }]
    
  }
};

export const Disabled: Story = { args: { disabled: true } };
