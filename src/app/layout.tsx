import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Air Quality App",
    description: "Air quality detector, using Next.js and IQAir API.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${interSans.variable}`}>{children}</body>
        </html>
    )
}
