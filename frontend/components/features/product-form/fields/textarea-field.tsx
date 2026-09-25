"use client";

import { Textarea } from "@/components/ui/textarea";

import { FormField } from "./form-field";

export function TextareaField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <FormField id={id} label={label} error={error}>
      <Textarea
        id={id}
        name={id}
        rows={3}
        value={value}
        placeholder={placeholder}
        aria-invalid={!!error}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
      />
    </FormField>
  );
}