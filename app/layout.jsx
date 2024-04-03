import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iTech",
  description: "Created by Matías Cancina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
