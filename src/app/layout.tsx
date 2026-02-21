import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "WillTech Code | Software Engineer",
  description: "Portfólio profissional de William A. S. - Desenvolvedor Full Stack especializado em React e Next.js.",
  icons: {
    icon: "/favicon.ico", 
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 -z-10 bg-background" aria-hidden="true" />
        
        {children}
      </body>
    </html>
  );
}