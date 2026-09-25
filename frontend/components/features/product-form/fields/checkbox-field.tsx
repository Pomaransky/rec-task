"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export type CheckboxFieldProps = {
  id: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
};

export function CheckboxField({ id, label, value, onChange, onBlur }: CheckboxFieldProps) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={id}
        checked={value}
        onCheckedChange={(checked) => onChange(checked === true)}
        onBlur={onBlur}
      />
      <Label htmlFor={id} className="leading-5">
        {label}
      </Label>
    </div>
  );
}
