import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1316px] px-4", className)}
      {...props}
    />
  );
};

export default Container;
