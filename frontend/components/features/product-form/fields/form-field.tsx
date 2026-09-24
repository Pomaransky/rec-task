import { cn } from "cn";
import { Label } from "radix-ui/label";

export interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField({ id, label, error, className, children }: FormFieldProps) {
  const messageId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-sm leading-5 font-medium">
        {label}
      </Label>

      {children}

      {error ? (
        <p id={messageId} role="alert" className="text-xs leading-4 text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
