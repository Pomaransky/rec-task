"use client";

import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function ProductsPagination({
  page,
  pageCount,
  total,
  onPageChange,
}: {
  page: number;
  pageCount: number;
  total: number;
  onPageChange: (page: number) => void;
}) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
      <p className="text-xs text-muted-foreground md:text-sm">
        Strona {page} z {pageCount} · {total} produktów
      </p>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className={cn(page > 1 && "text-foreground")}
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeftIcon />
          Wstecz
        </Button>

        {pages.map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={pageNumber === page ? "default" : "ghost"}
            size="icon-sm"
            className={cn(pageNumber !== page && "text-muted-foreground")}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}

        <Button
          variant="ghost"
          size="sm"
          className={cn(page < pageCount && "text-foreground")}
          disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
        >
          Dalej
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
