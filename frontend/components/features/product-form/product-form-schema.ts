import z from "zod";
import { CATEGORIES, MANUFACTURERS, PRODUCT_CHARACTERISTICS } from "./constants";

export const EMPTY_PRODUCT_FORM_VALUES = {
  name: "",
  sku: "",
  description: "",
  manufacturer: "",
  category: "",
  productCharacteristics: [] as string[],
};

export const basicInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nazwa produktu musi mieć co najmniej 3 znaki"),
  sku: z
    .string()
    .trim()
    .min(1, "SKU produktu jest wymagane")
    .max(24, "SKU może mieć maksymalnie 24 znaki")
    .regex(/^[a-zA-Z0-9]+$/, "SKU może zawierać wyłącznie litery i cyfry"),
  description: z.string().trim().max(500, "Opis może mieć maksymalnie 500 znaków"),
  manufacturer: z.enum(MANUFACTURERS.map(m => m.value), { error: "Wybierz producenta" }),
  category: z.enum(CATEGORIES.map(c => c.value), { error: "Wybierz kategorię" }),
  productCharacteristics: z
    .array(z.enum(PRODUCT_CHARACTERISTICS.map(p => p.value)))
    .min(1, "Wybierz co najmniej jedną cechę produktu"),
});