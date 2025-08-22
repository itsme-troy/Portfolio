import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata = {
  title: "Portfolio - Troy",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* This runs before React hydrates */}
      <Script id="theme-init" strategy="beforeInteractive">
        {`try {
          const ls = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const isDark = ls ? ls === 'dark' : prefersDark;
          document.documentElement.classList.toggle('dark', isDark);
        } catch(_) { /* no-op */ }`}
      </Script>

      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
