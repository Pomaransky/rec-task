"use client";

import { ProductsProvider } from "@/components/features/products/products-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <ProductsProvider>{children}</ProductsProvider>
    </NuqsAdapter>
  );
}
