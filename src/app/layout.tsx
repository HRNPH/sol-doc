import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "sol-doc",
  description: "AI Contract Generator",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
