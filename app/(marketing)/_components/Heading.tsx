import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 ">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, and Plans. Unified, Welcome to{" "}
        <span className="underline">Probably-notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Probably-notion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button size="lg" className="md:w-auto">
        Enter Probably-notion
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};
