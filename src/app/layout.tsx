import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Timberline Residences | Extended Stay Hotel Houston TX",
  description: "Your address for 30 days or better. A comfortable extended-stay hotel near IAH airport in Houston with fully equipped suites and weekly housekeeping.",
  keywords: "extended stay hotel Houston, IAH airport hotel, extended stay suite Houston, corporate housing Houston TX, weekly hotel Houston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
