import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {graphql} from "graphql/graphql";
import ApolloWrapper from "@/app/ApolloWrapper";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ClerkProvider>
        <ApolloWrapper>
            <header className="flex justify-between p-4">
                <div><Link href="/">home</Link></div>
                <div><Link href="/cart">cart</Link></div>
            </header>
            {children}
        </ApolloWrapper>
        </ClerkProvider>
        </body>
        </html>
    );
}
