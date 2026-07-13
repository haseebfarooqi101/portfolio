import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import ThemeWrapper from "@/components/ThemeWrapper";

export const metadata: Metadata = {
  title: "Dev Portfolio | Front-End Developer",
  description: "A modern front-end developer portfolio built with Next.js, Redux Toolkit, Tailwind CSS and Framer Motion.",
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <ThemeWrapper>{children}</ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
