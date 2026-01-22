import { useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import type { JSX } from "preact";
import "./button.css"

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ComponentChildren;
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const variantStyles: Record<ButtonVariant, JSX.CSSProperties> = {
    primary: {
      backgroundColor:
        hovered && !disabled
          ? "var(--btn-primary-bg-hover)"
          : "var(--btn-primary-bg)",
      color: "var(--btn-primary-text)",
      border: "1px solid transparent",
    },
    secondary: {
      backgroundColor:
        hovered && !disabled
          ? "var(--btn-secondary-bg-hover)"
          : "var(--btn-secondary-bg)",
      color: "var(--btn-secondary-text)",
      border: "1px solid var(--btn-secondary-border)",
    },
      tertiary: {
      backgroundColor:
        hovered && !disabled
          ? "var(--btn-tertiary-bg-hover)"
          : "var(--btn-tertiary-bg)",
      color:
        hovered && !disabled
          ? "var(--btn-tertiary-text-hover)"
          : "var(--btn-tertiary-text)",
      border: "1px solid transparent",
    
    },
  };

  const disabledStyles: Record<ButtonVariant, JSX.CSSProperties> = {
    primary: {
      backgroundColor: "var(--btn-primary-bg-disabled)",
      color: "var(--btn-primary-text-disabled)",
      cursor: "not-allowed",
    },
    secondary: {
      backgroundColor: "var(--btn-secondary-bg-disabled)",
      color: "var(--btn-secondary-text-disabled)",
      borderColor: "var(--btn-secondary-border-disabled)",
      cursor: "not-allowed",
    },
    tertiary: {
      backgroundColor: "var(--btn-tertiary-bg-disabled)",
      color: "var(--btn-tertiary-text-disabled)",
      cursor: "not-allowed",
    },
  };

  const sizeStyles: Record<ButtonSize, JSX.CSSProperties> = {
    sm: { padding: "8px 12px", fontSize: "14px", lineHeight: "20px" },
    md: { padding: "10px 16px", fontSize: "16px", lineHeight: "24px" },
    lg: { padding: "12px 20px", fontSize: "18px", lineHeight: "28px" },
  };

  return (
    <div >
         <button
      type="button"
      class="btn tracking-wide"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        outline: "none",
        backgroundColor:"var(--btn-primary-bg)",
        borderRadius: "var(--btn-radius)",
        fontWeight: "var(--btn-font-weight)",
        transition: "background-color 150ms, color 150ms, border-color 150ms",
        cursor: disabled ? "not-allowed" : "pointer",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...(disabled ? disabledStyles[variant] : {}),
      }}
    >
      {children}
    </button>
    </div>
   
  );
};

export default Button;
