import Link from "next/link";
import React from "react";

interface link {
  children: React.ReactNode;
  href: string;
}

export default function A({ children, href }: link) {
  return (
    <Link
      href={href}
      className="hover:text-purple-500 hover:underline transition"
    >
      {children}
    </Link>
  );
}
