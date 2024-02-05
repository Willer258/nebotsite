import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/globals.css";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import Providers from "@/app/providers/Providers"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Institut Nebot patrimoine",
  description: "Ensemble renforçons votre avenir financier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className + ' ' + 'bg-ble-400'} >
      <Providers>
        <Header />
        <div className="min-h-screen pt-28">{children}</div>
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
