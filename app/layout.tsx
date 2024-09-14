"use client";
import type { Metadata } from "next";
import { Rubik, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const rubik = Rubik({ subsets: ["latin"] });
export const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Matthew Frieri",
//   description: "My personal portfolio.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  config.autoAddCss = false;

  return (
    <ReactLenis root>
      <html lang="en">
        <body id="my-scroll" className={`${rubik.className} antialiased`}>
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
