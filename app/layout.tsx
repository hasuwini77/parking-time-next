import "@/styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { LanguageProvider } from "../context/LanguageContext";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <Providers>
          <LanguageProvider>
            <div className="flex flex-col h-screen bg-background">
              <Header />
              <main className=" flex-grow">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
