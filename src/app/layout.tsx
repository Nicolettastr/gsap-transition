import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navegation";
import { Providers } from "@/redux/provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio 2024",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className} data-theme='dark'>
                <Providers>
                    <main className='w-100 mx-auto' id='root-layout'>
                        <Navigation />
                        {children}
                    </main>
                </Providers>

                <Script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js' />
                <Script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js' />
            </body>
        </html>
    );
}
