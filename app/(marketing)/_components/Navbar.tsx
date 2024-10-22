"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";

export const Navbar = () => {
  const isScrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        isScrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center ga-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
