import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${outfit.className} ${ovo.className} 
            antialiased leading-8 overflow-x-hidden 
            bg-white dark:bg-darkTheme dark:text-white`}>
                
            {/* dark background and text-white will be applied
            when dark Mode is on */}
        {children}
      </body>
    </html>
  );
}
