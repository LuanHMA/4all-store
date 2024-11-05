import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "4All Store",
  description: "4 All: Beleza, Conforto e Qualidade ao Seu Alcance.",
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
