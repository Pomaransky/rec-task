"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FORM_STEPS } from "./constants";
import { ProductFormStepper } from "./product-form-stepper";
import { AvailabilityStep } from "./steps/availability-step";
import { BasicInfoStep } from "./steps/basic-info-step";
import { PricingStep } from "./steps/pricing-step";
import { STEP_FIELDS, type ProductFormApi } from "./use-product-form";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type ProductFormProps = {
  form: ProductFormApi;
};

const STEPS = [BasicInfoStep, PricingStep, AvailabilityStep];

export function ProductForm({ form }: ProductFormProps) {
  const [step, setStep] = useState(0);
  const isLastStep = step === FORM_STEPS.length - 1;
  const Step = STEPS[step];

  const submitStep = async () => {
    const fields = STEP_FIELDS[step].filter((name) => form.getFieldMeta(name));

    fields.forEach((name) => form.setFieldMeta(name, (meta) => ({ ...meta, isBlurred: true })));
    await form.validate("change");

    const hasErrors = fields.some((name) => form.getFieldMeta(name)?.errors.length);
    if (hasErrors) return;

    if (isLastStep) form.handleSubmit();
    else setStep(step + 1);
  };

  return (
    <form
      noValidate
      className="flex min-h-0 flex-1 flex-col"
      onSubmit={(event) => {
        event.preventDefault();
        submitStep();
      }}
    >
      <ProductFormStepper currentStep={step} />

      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
        <Step form={form} />
      </div>

      <div className="flex justify-between gap-2 border-t border-border p-4 bg-muted/50">
        <Button
          className="rounded-full bg-transparent hover:bg-white/50"
          type="button"
          variant="outline"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          <ArrowLeftIcon className="text-foreground" /> Wstecz
        </Button>
        <Button type="submit" className="rounded-full">{isLastStep ? "Zapisz produkt" : <>Dalej <ArrowRightIcon /></>} </Button>
      </div>
    </form>
  );
}
