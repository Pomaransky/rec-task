import { TableCell, TableRow } from "@/components/ui/table";
import { Product, ProductStatus } from "../types";
import { formatPrice, getCategoryLabel } from "../utils";
import { AvailabilityBadge } from ".";

export function ProductTableRow({ product }: { product: Product }) {
  return (
    <TableRow className="border-0">
      <TableCell className="border-b border-border text-foreground">
        {product.name}
      </TableCell>
      <TableCell className="border-b border-border text-xs text-muted-foreground">
        {product.sku}
      </TableCell>
      <TableCell className="border-b border-border text-muted-foreground">
        {getCategoryLabel(product.category)}
      </TableCell>
      <TableCell className="border-b border-border text-foreground">
        {formatPrice(product.grossPrice, product.currency)}
      </TableCell>
      <TableCell className="border-b border-border">
        <AvailabilityBadge isAvailable={product.status === ProductStatus.AVAILABLE} />
      </TableCell>
      <TableCell className="border-b border-border text-foreground">
        {product.stockQuantity ?? "—"}
      </TableCell>
    </TableRow>
  );
}