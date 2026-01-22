import { useState } from "preact/hooks";
import "./text-input.css";

type FieldStatus = "default" | "error" | "success";

type TextInputProps = {
  id?: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  onInput?: (value: string) => void;

  disabled?: boolean;
  status?: FieldStatus;
  message?: string;
  name?: string;
  type?: string;
  required?: boolean;
};

export const TextInput = ({
  id,
  label,
  placeholder,
  defaultValue = "",
  onInput,
  disabled = false,
  status = "default",
  message,
  name,
  type = "text",
  required = false,
}: TextInputProps) => {
  const [val, setVal] = useState(defaultValue);

  const inputId = id ?? name ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const isFilled = val.trim().length > 0;

  const classes = [
    "field",
    isFilled && "field--filled",
    status === "error" && "field--error",
    status === "success" && "field--success",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div class={classes}>
      <label class="field__label" for={inputId}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>

      <input
        class="field__control"
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={val}
        onInput={(e) => {
          const next = (e.currentTarget as HTMLInputElement).value;
          setVal(next);
          onInput?.(next);
        }}
        aria-invalid={status === "error" ? "true" : "false"}
      />

      {message ? <div class="field__hint">{message}</div> : null}
    </div>
  );
};

export default TextInput;
