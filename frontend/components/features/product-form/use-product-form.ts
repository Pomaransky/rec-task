import { useForm } from "@tanstack/react-form";
import { basicInfoSchema, EMPTY_PRODUCT_FORM_VALUES } from "./product-form-schema";

export function useProductForm() {
  return useForm({
    defaultValues: EMPTY_PRODUCT_FORM_VALUES,
    validators: {
      onChange: basicInfoSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
}

export type ProductFormApi = ReturnType<typeof useProductForm>;
