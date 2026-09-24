"use client";

import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Option } from "../types";

import { FormField } from "./form-field";
import { cn } from "@/lib/utils";

export type MultiSelectFieldProps = {
  id: string;
  label: string;
  value: string[];
  options: Option[];
  onChange: (value: string[]) => void;
  onBlur: () => void;
  error?: string;
};

export function MultiSelectField({ id, label, value, options, onChange, onBlur, error }: MultiSelectFieldProps) {
  const toggle = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((current) => current !== option)
        : [...value, option],
    );
    onBlur();
  };

  return (
    <FormField id={id} label={label} error={error}>
      <div
        id={id}
        role="group"
        aria-label={label}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const isSelected = value.includes(option.value);

          return (
            <Button
              key={option.value}
              type="button"
              size="xs"
              variant={isSelected ? "default" : "outline"}
              role="checkbox"
              aria-checked={isSelected}
              onClick={() => toggle(option.value)}
              className={cn(isSelected ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground", "rounded-full h-6 cursor-pointer px-2 py-0.5 transition-colors")}
            >
              {isSelected && <CheckIcon />}
              {option.label}
            </Button>
          );
        })}
      </div>
    </FormField>
  );
}
