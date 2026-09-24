export const AMOUNT_INPUT_PATTERN = /^\d*[.,]?\d{0,2}$/;
export const INTEGER_INPUT_PATTERN = /^\d*$/;

export function parseAmount(input: string): number | null {
  const normalized = input.trim().replace(",", ".");
  if (normalized === "") return null;
  if (!/^\d*\.?\d*$/.test(normalized)) return null;

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

export function parseInteger(input: string): number | null {
  const normalized = input.trim();
  return /^\d+$/.test(normalized) ? Number(normalized) : null;
}

const vatMultiplier = (vatRate: string) => 1 + Number(vatRate) / 100;

const formatAmount = (value: number) => (Math.round(value * 100) / 100).toFixed(2);

export function grossFromNet(net: string, vatRate: string): string {
  const amount = parseAmount(net);
  return amount === null ? "" : formatAmount(amount * vatMultiplier(vatRate));
}

export function netFromGross(gross: string, vatRate: string): string {
  const amount = parseAmount(gross);
  return amount === null ? "" : formatAmount(amount / vatMultiplier(vatRate));
}
