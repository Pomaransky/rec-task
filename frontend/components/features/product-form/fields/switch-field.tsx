"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export type SwitchFieldProps = {
  id: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
};

export function SwitchField({ id, label, value, onChange, onBlur }: SwitchFieldProps) {
  return (
    <div className="flex items-center gap-3">
      <Switch
        id={id}
        checked={value}
        onCheckedChange={onChange}
        onBlur={onBlur}
      />
      <Label htmlFor={id} className="leading-5">
        {label}
      </Label>
    </div>
  );
}
