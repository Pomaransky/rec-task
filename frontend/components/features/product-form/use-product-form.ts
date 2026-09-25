import { useForm } from "@tanstack/react-form";
import { EMPTY_PRODUCT_FORM_VALUES, productFormSchema } from "./product-form-schema";

type ProductFormValues = typeof EMPTY_PRODUCT_FORM_VALUES;
type ProductFormField = keyof ProductFormValues;

export const STEP_FIELDS: ProductFormField[][] = [
  ["name", "sku", "description", "manufacturer", "category", "productCharacteristics"],
  ["netPrice", "grossPrice", "vatRate", "currency"],
  ["isAvailable", "isLimited", "stockQuantity", "minCartQuantity", "maxCartQuantity"],
];

export function useProductForm(onSubmit: (values: ProductFormValues) => void) {
  return useForm({
    defaultValues: EMPTY_PRODUCT_FORM_VALUES,
    validators: {
      onChange: productFormSchema,
    },
    onSubmit: ({ value }) => onSubmit(value),
  });
}

export type ProductFormApi = ReturnType<typeof useProductForm>;
