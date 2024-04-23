import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { CartProvider } from "@/components/context/CartContext";
import favicon from "@/public/itech_logo.png";
import { AuthProvider } from "@/components/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iTech",
  description: "Created by Matías Cancina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href={favicon} />
      </head> */}
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <NavBar />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
