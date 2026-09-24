"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Option } from "../types";

import { FormField } from "./form-field";

export type SelectFieldProps = {
  id: string;
  label: string;
  value: string | "";
  options: Option[];
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
  className?: string;
};

export function SelectField({
  id,
  label,
  value,
  options,
  onChange,
  onBlur,
  error,
  placeholder,
  className,
}: SelectFieldProps) {
  return (
    <FormField
      id={id}
      label={label}
      error={error}
      className={className}
    >
      <Select
        value={value === "" ? undefined : value}
        onValueChange={(next) => onChange(next as string)}
      >
        <SelectTrigger
          id={id}
          aria-invalid={!!error}
          onBlur={onBlur}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}
