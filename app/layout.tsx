import type { Metadata } from "next";;
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {DM_Sans} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import {ModalProvider} from "@/providers/modal-provider";


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
      <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <html lang="en" suppressHydrationWarning={true}>
          <body
            className={`${font.className}  antialiased`}
          >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
  );
}
