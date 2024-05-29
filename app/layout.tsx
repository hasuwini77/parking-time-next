import "@/styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
       <head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="light font-sans">
        <Providers>
          <LanguageProvider> 
          <div className="flex flex-col h-screen bg-background">
          <Header/> 
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}