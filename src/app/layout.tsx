import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Atlas CNB | Echipă FTC Robotics Timișoara",
    template: "%s | Atlas CNB",
  },
  description:
    "Atlas CNB (#20732) este o echipă de robotică FTC din Colegiul Național Bănățean, Timișoara — pasionată de inginerie, inovație și comunitate.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}