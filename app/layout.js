import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALD 8o ano - version 1.0",
  description: "Generated by BEI EDUCACAO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-medium dark:text-white `}>
        {children}
      </body>
    </html>
  );
}