"use client";
import { useAppSelector } from "@/store/hooks";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const isDark = useAppSelector((s) => s.theme.isDark);
  return <div className={isDark ? "" : "light"}>{children}</div>;
}
