import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import CustomCursor from './components/CustomCursor';
import Script from 'next/script';
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Success",
  description: "Real-time agile software devlopment agency in Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <GoogleAnalytics />
      </Head>
      <body className={`${inter.className} relative h-screen`}>

           {/* Google tag (gtag.js) */}
           <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16902711921"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16902711921');
          `}
        </Script>

      <CustomCursor />


        {/* Dark overlay */}
        <div className="absolute inset-0 bg-white opacity-50 z-[-1] h-full"></div>
        
        <div className="relative z-10">
          {children}
        </div>

        {/* Sticky Footer */}
        <footer className="fixed bottom-0 left-0 w-full py-3 z-20">
          <div className="container mx-auto px-4 flex space-x-4 p-2 pl-12 font-semibold">
            <p className='hover:underline bg-black p-1 px-6 rounded-full'>
              <a href="mailto:Jakobossmann@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </p>
            {/* <p className='hover:underline'>
              <a href="https://www.youtube.com/@jakobossmann2323" target="_blank">Youtube</a>
            </p>
            <p className='hover:underline'>
              <a href="https://github.com/Ossmann" target="_blank">Github</a>
            </p>
            <p className='hover:underline'>
              <a href="https://www.linkedin.com/in/jakobossmann/" target="_blank">Linkedin</a>
            </p> */}
          </div>
        </footer>

      </body>
    </html>
  );
}
