import "@/styles/globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "@/context/ThemeContext"; // Assuming this is the correct path to your ThemeProvider
import Header from "@/components/Header";
import { LanguageProvider } from "../context/LanguageContext";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="light font-sans">
        <ThemeProvider>
          {" "}
          {/* Add ThemeProvider here */}
          <Providers>
            <LanguageProvider>
              <div className="flex flex-col h-screen bg-background">
                <Header />
                <main className="pt-[64px] flex-grow relative">{children}</main>
                <Footer />
                <Toaster />
              </div>
            </LanguageProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
