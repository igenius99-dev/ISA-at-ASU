"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";

// simple cn fallback if you don't have one
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Accordion({ className, ...props }) {
  return (
    <AccordionPrimitive.Root
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

export function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item className={cn("border-b", className)} {...props} />
  );
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between rounded-lg py-3 text-left text-sm font-medium transition-all hover:underline focus:outline-none",
          className,
        )}
        {...props}
      >
        {children}

        {/* Down icon (closed) */}
        <ChevronDown className="h-4 w-4 group-data-[state=open]:hidden" />

        {/* Up icon (open) */}
        <ChevronUp className="h-4 w-4 hidden group-data-[state=open]:block" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className,
      )}
      {...props}
    >
      <div className="pt-2 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
}
