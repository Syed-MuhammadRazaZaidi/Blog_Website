import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider> 
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
        <Navbar/>
        {children}
        </ThemeProvider>
        <Footer/>
        </body>
    </html>
        </ClerkProvider>
  );
}
