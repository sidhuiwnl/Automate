import type { Metadata } from "next";;
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {DM_Sans} from "next/font/google";


const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Automake",
  description: "Automate your daily task with automake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className}  antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
