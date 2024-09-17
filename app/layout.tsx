import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/_components/nav/nav";
import Footer from "@/app/_components/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
