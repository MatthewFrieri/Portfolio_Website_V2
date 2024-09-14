"use client";
import { Rubik, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const metadata = {
  title: "Matthew Frieri",
  description: "My personal portfolio.",
};

const rubik = Rubik({ subsets: ["latin"] });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenis = useLenis(({ scroll }) => {});
  config.autoAddCss = false;

  return (
    <ReactLenis root>
      <html lang="en">
        <head>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <title>{metadata.title}</title>
          <link rel="icon" href="favicon.png" />
        </head>
        <body id="my-scroll" className={`${rubik.className} antialiased`}>
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
