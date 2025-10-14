import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[calc(100svh-58px)] flex items-center justify-center">
      {children}
    </div>
  );
}
