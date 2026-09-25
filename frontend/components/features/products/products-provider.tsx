"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { PRODUCTS_MOCK } from "./products-mock";
import { Product } from "./types";

type ProductsContextValue = {
  products: readonly Product[];
  addProduct: (product: Omit<Product, "id">) => Product;
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

  const addProduct = useCallback((product: Omit<Product, "id">) => {
    const newProduct: Product = { ...product, id: crypto.randomUUID() };
    setProducts((current) => [newProduct, ...current]);
    return newProduct;
  }, []);

  const value = useMemo<ProductsContextValue>(
    () => ({ products, addProduct }),
    [products, addProduct],
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
