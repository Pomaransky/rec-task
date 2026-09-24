"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddProductDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          <PlusIcon />
          Dodaj produkt
        </Button>
      </DialogTrigger>

      <DialogContent className="top-0 left-0 flex h-dvh w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none bg-card p-0 sm:top-[50%] sm:left-[50%] sm:h-auto sm:max-h-[85vh] sm:w-full sm:max-w-[720px] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-xl">
        <DialogHeader className="border-b border-border px-4 py-6 text-left">
          <DialogTitle className="text-base leading-none font-medium">
            Dodaj nowy produkt
          </DialogTitle>
        </DialogHeader>

        FORM
      </DialogContent>
    </Dialog>
  );
}
