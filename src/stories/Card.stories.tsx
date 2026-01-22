import type { Meta, StoryObj } from "@storybook/preact";
import type { ComponentProps } from "preact";
import { PromoCard } from "../components/Card/Card";

type StoryProps = ComponentProps<typeof PromoCard>;

const meta: Meta<StoryProps> = {
  component: PromoCard,
  tags: ["autodocs"],
  argTypes: {
    onCta: { action: "onCta" },
    ctaVariant: { control: "select", options: ["primary", "secondary", "tertiary"] },
    variant: { control: "select", options: ["default", "promo"] },
    disabled: { control: "boolean" },
  },
  args: {
    kicker: "Black Friday sale",
    title: "20% off every product",
    ctaLabel: "Buy now",
    ctaVariant: "primary",
    
    variant: "promo",
    disabled: false,
    onCta: () => {},
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Promo: Story = {};

export const DisabledCTA: Story = { args: { disabled: true } };

export const WithSecondaryCTA: Story = { args: { ctaVariant: "secondary" } };

export const DefaultSurface: Story = { args: { variant: "default" } };
