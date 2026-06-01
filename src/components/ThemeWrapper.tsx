"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const isDark = useAppSelector((s) => s.theme.isDark);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return <>{children}</>;
}
