export type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  grossPrice: number;
  currency: string;
  status: ProductStatus;
  stockQuantity: number | null;
};

export enum ProductStatus {
  AVAILABLE = "available",
  UNAVAILABLE = "unavailable",
}