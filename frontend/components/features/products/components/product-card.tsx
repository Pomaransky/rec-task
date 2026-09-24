import { Product, ProductStatus } from "../types";
import { AvailabilityBadge } from ".";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="truncate text-base leading-6 font-medium text-foreground">
            {product.name}
          </h2>
          <p className="text-xs leading-4 text-muted-foreground">
            {product.sku}
          </p>
        </div>
        <AvailabilityBadge isAvailable={product.status === ProductStatus.AVAILABLE} />
      </div>

      <div className="grid grid-cols-3 gap-1 rounded-[9px] bg-muted p-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs leading-4 text-muted-foreground">
            Kategoria
          </p>
          <p className="text-base leading-6 font-medium text-foreground">
            {product.category}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs leading-4 text-muted-foreground">
            Cena brutto
          </p>
          <p className="text-base leading-6 font-medium text-foreground">
            {product.grossPrice}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs leading-4 text-muted-foreground">
            Magazyn
          </p>
          <p className="text-base leading-6 font-medium text-foreground">
            {product.stockQuantity ?? "—"}
          </p>
        </div>
      </div>
    </article>
  );
}
