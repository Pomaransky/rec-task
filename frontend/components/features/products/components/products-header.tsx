"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export function ProductsHeader({ total }: { total: number }) {
  const handleAddProduct = () => {
    console.log("Dodaj produkt");
  };
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-foreground leading-normal">Produkty</h1>
        <p className="text-sm text-muted-foreground">
          {total} produktów w katalogu
        </p>
      </div>
      <Button className="rounded-full" onClick={handleAddProduct}><PlusIcon />Dodaj produkt</Button>
    </header>
  );
}