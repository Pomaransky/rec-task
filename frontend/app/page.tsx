import { Suspense } from "react";

import { ProductsView } from "@/components/features/products/products-view";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col px-4 py-4">
      <div className="mx-auto w-full max-w-[1240px]">
        <Suspense>
          <ProductsView />
        </Suspense>
      </div>
    </main>
  );
}
