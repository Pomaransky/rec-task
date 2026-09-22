"use client";

import { createContext, useContext, useMemo, useState } from "react";

import { PRODUCTS_MOCK } from "./products-mock";
import { Product } from "./types";

type ProductsContextValue = {
  products: readonly Product[];
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({
  children,
  initialProducts = PRODUCTS_MOCK,
}: {
  children: React.ReactNode;
  initialProducts?: readonly Product[];
}) {
  const [products, setProducts] = useState<readonly Product[]>(initialProducts);

  const value = useMemo<ProductsContextValue>(
    () => ({ products }),
    [products],
  );

  return (
    <ProductsContext value={value}>{children}</ProductsContext>
  );
}

export function useProducts(): ProductsContextValue {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used inside a <ProductsProvider>");
  }
  return context;
}
