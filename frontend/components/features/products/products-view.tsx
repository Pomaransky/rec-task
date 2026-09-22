import { ProductsHeader } from "./components/products-header";

export function ProductsView() {
  const total = 7; // TODO: replace with actual total

  return (
    <div className="flex flex-col gap-6">
      <ProductsHeader total={total} />
    </div>
  );
}