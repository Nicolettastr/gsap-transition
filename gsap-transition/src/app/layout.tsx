import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navegation";
import { Providers } from "@/redux/provider";

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
                    <main className='w-100 mx-auto'>
                        <Navigation />
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
