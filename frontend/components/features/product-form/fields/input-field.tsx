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
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
      />
    </FormField>
  );
}
