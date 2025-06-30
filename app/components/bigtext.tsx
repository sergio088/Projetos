import React from "react";

export default function T1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl lg:text-5xl text-black">{children}</h1>;
}
