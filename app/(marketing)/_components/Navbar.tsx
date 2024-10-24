"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Spinner } from "./Spinner";
import Link from "next/link";

export const Navbar = () => {
  const isScrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        isScrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center ga-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size={"sm"}>Join for free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Jotion</Link>
            </Button>
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
