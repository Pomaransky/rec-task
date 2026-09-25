import { cn } from "cn";
import { CheckIcon } from "lucide-react";
import { FORM_STEPS } from "./constants";


export function ProductFormStepper({ currentStep }: { currentStep: number }) {
  return (
    <ol className="flex items-start gap-2 border-b border-border px-4 py-3 sm:items-center sm:gap-4">
      {FORM_STEPS.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <li
            key={step.id}
            className="flex flex-1 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
            aria-current={isActive ? "step" : undefined}
          >
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                  isCompleted || isActive
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-muted text-muted-foreground",
                )}
              >
                {isCompleted ? (
                  <CheckIcon className="size-4" aria-hidden />
                ) : (
                  index + 1
                )}
              </span>

              <span className="flex flex-col items-start gap-0.5 text-left">
                <span
                  className={cn(
                    "text-sm leading-5 font-medium",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.title}
                </span>
                <span className="text-xs leading-4 text-muted-foreground">
                  {step.subtitle}
                </span>
              </span>
            </div>

            {index < FORM_STEPS.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "hidden h-px min-w-4 flex-1 sm:block",
                  isCompleted ? "bg-primary" : "bg-border",
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
