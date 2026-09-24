import z from "zod";
import { CATEGORIES, CURRENCIES, MANUFACTURERS, PRODUCT_CHARACTERISTICS, VAT_RATES } from "./constants";
import { parseAmount, parseInteger } from "./utils";

export const EMPTY_PRODUCT_FORM_VALUES = {
  name: "",
  sku: "",
  description: "",
  manufacturer: "",
  category: "",
  productCharacteristics: [] as string[],
  netPrice: "",
  grossPrice: "",
  vatRate: "23",
  currency: "PLN",
  isAvailable: true,
  isLimited: false,
  stockQuantity: "",
  minCartQuantity: "",
  maxCartQuantity: "",
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

const amount = (message: string) =>
  z
    .string()
    .refine((raw) => {
      const value = parseAmount(raw);
      return value !== null && value >= 0;
    }, message)
    .transform((raw) => parseAmount(raw) as number);

export const pricingSchema = z.object({
  netPrice: amount("Podaj poprawną cenę netto"),
  grossPrice: amount("Podaj poprawną cenę brutto"),
  vatRate: z.enum(VAT_RATES.map(v => v.value), { error: "Wybierz stawkę VAT" }),
  currency: z.enum(CURRENCIES.map(c => c.value), { error: "Wybierz walutę" }),
});

const cartQuantity = (message: string) =>
  z.string().refine((raw) => (parseInteger(raw) ?? 0) >= 1, message);

export const availabilitySchema = z.object({
  isAvailable: z.boolean(),
  isLimited: z.boolean(),
  stockQuantity: z.string(),
  minCartQuantity: cartQuantity("Podaj minimalną ilość (liczba całkowita, min. 1)"),
  maxCartQuantity: cartQuantity("Podaj maksymalną ilość (liczba całkowita, min. 1)"),
});

export const productFormSchema = z
  .object({
    ...basicInfoSchema.shape,
    ...pricingSchema.shape,
    ...availabilitySchema.shape,
  })
  .superRefine((values, ctx) => {
    if (values.isLimited && parseInteger(values.stockQuantity) === null) {
      ctx.addIssue({
        code: "custom",
        path: ["stockQuantity"],
        message: "Podaj ilość na magazynie (nieujemna liczba całkowita)",
      });
    }

    const min = parseInteger(values.minCartQuantity);
    const max = parseInteger(values.maxCartQuantity);
    if (min !== null && max !== null && min > max) {
      ctx.addIssue({
        code: "custom",
        path: ["minCartQuantity"],
        message: "Min. ilość nie może być większa niż maks.",
      });
      ctx.addIssue({
        code: "custom",
        path: ["maxCartQuantity"],
        message: "Maks. ilość nie może być mniejsza niż min.",
      });
    }
  }, { when: () => true });
