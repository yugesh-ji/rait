import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "RAIT - Rashm Academy of Information Technology",
  description: "Rashm Academy of Information Technology (RAIT) is a premier IT academy in Gorakhpur, India, offering a wide range of courses in computer science and information technology. Our mission is to empower students with the skills and knowledge needed to excel in the tech industry.",
  keywords: "RAIT, Rashm Academy, IT Academy, Gorakhpur, Computer Courses, Information Technology, IT Training, Job Support, Digital Skills, Computer Education",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://rait.org.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
        <meta name="google-site-verification" content="KW-bK34EGeqGUV6MHOB3nPJ2ZEjpJLcs9piDRIZdE8w" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
