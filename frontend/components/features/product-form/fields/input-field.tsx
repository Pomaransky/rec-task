"use client";

import { Input } from "@/components/ui/input";

import { FormField } from "./form-field";

export type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  description?: string;
  placeholder?: string;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "decimal";
  allowedPattern?: RegExp;
};

export function InputField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  maxLength,
  inputMode = "text",
  allowedPattern,
}: InputFieldProps) {
  return (
    <FormField
      id={id}
      label={label}
      error={error}
    >
      <Input
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        aria-invalid={!!error}
        onChange={(event) => {
          const next = event.target.value;
          if (allowedPattern && !allowedPattern.test(next)) return;
          onChange(next);
        }}
        onBlur={onBlur}
      />
    </FormField>
  );
}
