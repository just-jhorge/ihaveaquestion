import React from "react";

export default function Mainlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-2xl mx-auto px-4 xl:px-0">{children}</div>;
}
