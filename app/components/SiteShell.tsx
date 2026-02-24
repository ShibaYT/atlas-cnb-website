"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen bg-atlas-charcoal text-atlas-cream">
      <div className="pointer-events-none absolute inset-0 -z-20 atlas-grain" />
      <div className="pointer-events-none absolute inset-0 -z-30 atlas-ambient" />

      <SiteNav />

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}

