import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideAirVent } from "lucide-react";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-surface w-[100%] p-2 text-background custom-glass rounded-[8px] text-[16px] font-bold focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent",

        className
      )}
      {...props}
    />
  );
}

export { Input };
