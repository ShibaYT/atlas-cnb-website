import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas CNB | Echipă FTC Robotics Timișoara",
  description:
    "Atlas CNB este o echipă de robotică FTC din Timișoara, România, pasionată de inginerie, inovație și comunitate.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body style={{ margin: 0, padding: 0, background: "#080603" }}>
        {children}
      </body>
    </html>
  );
}