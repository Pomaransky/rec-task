import { CATEGORIES } from "../product-form/constants";

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat("pl-PL", { style: "currency", currency, currencyDisplay: "code" }).format(amount);
}

export function getCategoryLabel(value: string): string {
  return CATEGORIES.find((category) => category.value === value)?.label ?? value;
}
