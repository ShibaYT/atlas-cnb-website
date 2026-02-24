import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas CNB | FTC Robotics Team Timișoara",
  description:
    "Atlas CNB is a Romanian FTC robotics team from Timișoara, passionate about innovation, engineering, and community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-slate-950 text-slate-50">
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
