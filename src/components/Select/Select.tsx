import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import "./select.css";

type Option = { label: string; value: string; disabled?: boolean };

type SelectProps = {
  label?: string;
  placeholder?: string;
  options: Option[];

  value?: string; // optional controlled
  defaultValue?: string; // optional uncontrolled
  onChange?: (value: string) => void;

  disabled?: boolean;
  name?: string;
  id?: string;
};

export const Select = ({
  label,
  placeholder = "Select an option",
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
  name,
  id,
}: SelectProps) => {
  const isControlled = value !== undefined;

  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [activeIndex, setActiveIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);

  const selectedValue = isControlled ? value! : internalValue;

  const selectedLabel = useMemo(() => {
    const found = options.find((o) => o.value === selectedValue);
    return found?.label ?? "";
  }, [options, selectedValue]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    const onDocDown = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [open]);

  const pick = (val: string) => {
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
    setOpen(false);
  };

  const move = (dir: 1 | -1) => {
    if (!options.length) return;
    let next = activeIndex;

    for (let i = 0; i < options.length; i++) {
      next = (next + dir + options.length) % options.length;
      if (!options[next].disabled) break;
    }

    setActiveIndex(next);
  };

  return (
    <div
      ref={rootRef}
      class="select"
      data-open={open ? "true" : "false"}
    >
      {label ? <label class="select__label">{label}</label> : null}

      <button
        type="button"
        class="select__trigger"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (disabled) return;

          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }

          if (e.key === "ArrowDown") {
            e.preventDefault();
            if (!open) setOpen(true);
            move(1);
          }

          if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!open) setOpen(true);
            move(-1);
          }

          if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      >
        <span class={selectedLabel ? "" : "select__value--placeholder"}>
          {selectedLabel || placeholder}
        </span>

        <span aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      {/* hidden input so forms work */}
      {name ? <input type="hidden" name={name} value={selectedValue} /> : null}

      {open ? (
        <div
          class="select__panel"
          role="listbox"
          aria-label={label ?? "Select"}
        >
          {options.map((opt, idx) => {
            const isSelected = opt.value === selectedValue;
            const isActive = idx === activeIndex;

            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected ? "true" : "false"}
                class="select__option"
                style={{
                  opacity: opt.disabled ? 0.5 : 1,
                  background: isActive ? "var(--select-option-hover-bg)" : "transparent",
                  pointerEvents: opt.disabled ? "none" : "auto",
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => pick(opt.value)}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
