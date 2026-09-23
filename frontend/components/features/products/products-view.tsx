"use client";

import { parseAsInteger, useQueryState } from "nuqs";

import { ProductsHeader } from "./components/products-header";
import { ProductsList } from "./components/products-list";
import { ProductsTable } from "./components/products-table";
import { useProducts } from "./products-provider";

const PAGE_SIZE = 5;

export function ProductsView() {
  const { products } = useProducts();
  const total = products.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true }),
  );
  const currentPage = Math.min(Math.max(page, 1), pageCount);

  const paginatedProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="flex flex-col gap-6">
      <ProductsHeader total={total} />
      <div className="hidden md:block">
        <ProductsTable
          products={paginatedProducts}
          total={total}
          page={currentPage}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      </div>

      <div className="md:hidden">
        <ProductsList
          products={paginatedProducts}
          total={total}
          page={currentPage}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}