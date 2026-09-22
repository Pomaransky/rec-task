import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "../types";

import { ProductsPagination } from "./products-pagination";
import { ProductTableRow } from "./products-table-row";
import { cn } from "cn";

const COLUMNS = [
  { key: "name", label: "Nazwa", className: "w-[28%]" },
  { key: "sku", label: "SKU", className: "w-[14%]" },
  { key: "category", label: "Kategoria", className: "w-[14%]" },
  { key: "price", label: "Cena brutto", className: "w-[16%]" },
  { key: "availability", label: "Status", className: "w-[14%]" },
  { key: "stock", label: "Magazyn", className: "w-[14%]" },
] as const;

export function ProductsTable({
  products,
  total,
  page,
  pageCount,
  onPageChange,
  className,
}: {
  products: readonly Product[];
  total: number;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
      <Table className={cn("border-separate border-spacing-0", className)}>
        <TableHeader>
          <TableRow>
            {COLUMNS.map((column) => (
              <TableHead
                key={column.key}
                className={cn(
                  "border-b border-border text-xs font-medium text-muted-foreground",
                  column.className,
                )}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <td
                colSpan={COLUMNS.length}
                className="h-24 px-4 text-center text-sm text-muted-foreground"
              >
                Brak produktów do wyświetlenia.
              </td>
            </TableRow>
          ) : (
            products.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))
          )}
        </TableBody>

        {pageCount > 1 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={COLUMNS.length} className="px-4 py-3">
                <ProductsPagination
                  page={page}
                  pageCount={pageCount}
                  total={total}
                  onPageChange={onPageChange}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
