import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "@/components/layout/navigation-menu";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer";
import "@/app/globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.className
            )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavigationMenuDemo />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
