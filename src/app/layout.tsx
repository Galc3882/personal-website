import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Head from "next/head";

<Head>
  <link rel="preload" href="/images/aUToronto.jpg" as="image" />
</Head>;

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gal Cohen",
  description: `Gal Cohen's personal website`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} bg-dark text-white`}
        style={{ backgroundImage: "url('images/cool-pattern.svg')" }}
      >
        {children}
      </body>
    </html>
  );
}
