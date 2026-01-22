import type { Meta, StoryObj } from "@storybook/preact";
import type { ComponentProps } from "preact";
import { LoginForm } from "../components/LoginSystem/LoginSystem";

type Props = ComponentProps<typeof LoginForm>;

const meta: Meta<Props> = {
  
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
     onChange: { action: "onChange" },
    // Header
    title: { control: "text" },
    subtitle: { control: "text" },

    // Promo
    showPromo: { control: "boolean" },
    promoKicker: { control: "text" },
    promoTitle: { control: "text" },
    promoCtaLabel: { control: "text" },
    promoVariant: { control: "select", options: ["default", "promo"] },
    promoCtaVariant: { control: "select", options: ["primary", "secondary", "tertiary"] },

    // Fields
    emailLabel: { control: "text" },
    emailPlaceholder: { control: "text" },
    passwordLabel: { control: "text" },
    passwordPlaceholder: { control: "text" },

    roleLabel: { control: "text" },
    rolePlaceholder: { control: "text" },
    roleOptions: { control: "object" },

    // Buttons
    cancelLabel: { control: "text" },
    submitLabel: { control: "text" },
    cancelVariant: { control: "select", options: ["primary", "secondary", "tertiary"] },
    submitVariant: { control: "select", options: ["primary", "secondary", "tertiary"] },
    cancelDisabled: { control: "boolean" },
    submitDisabled: { control: "boolean" },

    // Events (Actions)
    onCancel: { action: "cancel" },
    onSubmit: { action: "submit" },
  },
  args: {
    title: "Login",
    subtitle: "Sign in to continue",

    showPromo: true,
    promoKicker: "Welcome back",
    promoTitle: "Access your dashboard",
    promoCtaLabel: "Learn more",
    promoVariant: "promo",
    promoCtaVariant: "primary",

    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",

    roleLabel: "Role",
    rolePlaceholder: "Choose role",
    roleOptions: [
      { label: "Customer", value: "customer" },
      { label: "Admin", value: "admin" },
      { label: "Manager", value: "manager" },
    ],

    cancelLabel: "Cancel",
    submitLabel: "Sign in",
    cancelVariant: "secondary",
    submitVariant: "primary",
    cancelDisabled: false,
    submitDisabled: false,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<Props>;

export const Login: Story = {
  args: {
    title: "Logout"
  },

  render: (args) => <LoginForm {...args} />
};
