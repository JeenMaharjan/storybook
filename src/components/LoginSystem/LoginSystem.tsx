import { useRef, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import "./login-form.css";

import { Button } from "../Button/Button";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Select/Select";
import { PromoCard } from "../Card/Card";

type Option = { label: string; value: string; disabled?: boolean };

export type LoginFormProps = {
  // Header
  title?: string;
  subtitle?: string;

  

  // Promo card
  showPromo?: boolean;
  promoKicker?: string;
  promoTitle?: string;
  promoCtaLabel?: string;
  promoVariant?: "default" | "promo";
  promoCtaVariant?: "primary" | "secondary" | "tertiary";

  // Fields
  emailLabel?: string;
  emailPlaceholder?: string;

  passwordLabel?: string;
  passwordPlaceholder?: string;

  roleLabel?: string;
  rolePlaceholder?: string;
  roleOptions?: Option[];

  // Buttons
  cancelLabel?: string;
  submitLabel?: string;
  cancelVariant?: "primary" | "secondary" | "tertiary";
  submitVariant?: "primary" | "secondary" | "tertiary";
  cancelDisabled?: boolean;
  submitDisabled?: boolean;

  // Callbacks
  onCancel?: () => void;
  onSubmit?: (data: { email: string; password: string; role: string }) => void;

  children?: ComponentChildren;
};

export const LoginForm = ({
  title = "Login",
  subtitle = "Sign in to continue",

  showPromo = true,
  promoKicker = "Welcome back",
  promoTitle = "Access your dashboard",
  promoCtaLabel = "Learn more",
  promoVariant = "promo",
  promoCtaVariant = "tertiary",

  emailLabel = "Email",
  emailPlaceholder = "you@example.com",

  passwordLabel = "Password",
  passwordPlaceholder = "••••••••",

  roleLabel = "Role",
  rolePlaceholder = "Choose role",
  roleOptions = [
    { label: "Customer", value: "customer" },
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
  ],

  cancelLabel = "Cancel",
  submitLabel = "Sign in",
  cancelVariant = "secondary",
  submitVariant = "primary",
  cancelDisabled = false,
  submitDisabled = false,

  onCancel,
  onSubmit,
}: LoginFormProps) => {
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <section class="login">
        <div class="login__div">
             <header class="login__header">
        <h2 class="login__title">{title}</h2>
        <p class="login__subtitle">{subtitle}</p>
      </header>

      {showPromo ? (
        <div class="login__promo">
          <PromoCard
            kicker={promoKicker}
            title={promoTitle}
            ctaLabel={promoCtaLabel}
            ctaVariant={promoCtaVariant}
            onCta={() => {}}
            variant={promoVariant}
          />
        </div>
      ) : null}

      <div class="login__stack">
        <TextInput
          label={emailLabel}
          placeholder={emailPlaceholder}
          type="email"
          required
          onInput={(val) => setEmail(val)}
          // @ts-ignore (only if your TextInput supports inputRef)
          inputRef={firstInputRef}
        />

        <TextInput
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          type="password"
          required
          onInput={(val) => setPassword(val)}
        />

        <Select
          label={roleLabel}
          placeholder={rolePlaceholder}
          options={roleOptions}
          onChange={(v) => setRole(v)}
        />

        <div class="login__actions">
          <Button
            variant={cancelVariant}
            disabled={cancelDisabled}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>

          <Button
            variant={submitVariant}
            disabled={submitDisabled}
            onClick={() => onSubmit?.({ email, password, role })}
          >
            {submitLabel}
          </Button>
        </div>

        <div class="login__hint">This is a composition: Card + Inputs + Select + Buttons.</div>
      </div>
        </div>
     
    </section>
  );
};

export default LoginForm;
