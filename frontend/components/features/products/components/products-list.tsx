import { Product } from "../types";
import { ProductCard, ProductsPagination } from ".";

export function ProductsList({
  products,
  total,
  page,
  pageCount,
  onPageChange,
}: {
  products: readonly Product[];
  total: number;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {products.length === 0 ? (
        <div className="flex h-24 items-center justify-center rounded-xl border border-border bg-card text-sm text-muted-foreground">
          Brak produktów do wyświetlenia.
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}

      {pageCount > 1 && (
        <ProductsPagination
          page={page}
          pageCount={pageCount}
          total={total}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
