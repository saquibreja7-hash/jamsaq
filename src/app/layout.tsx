import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "jamsaq | Web Design & Growth Systems",
  description:
    "jamsaq designs and builds conversion-focused websites for brands that need clarity, credibility, and growth.",
  openGraph: {
    title: "jamsaq | Web Design & Growth Systems",
    description: "Strategy-led web design and development for brands that need clarity, credibility, and growth.",
    type: "website",
  },
  metadataBase: new URL("https://jamsaq.co"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      {/* Prevent flash of wrong theme before React hydrates */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('jamsaq-theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#fafaf8] text-[#111111] dark:bg-black dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
