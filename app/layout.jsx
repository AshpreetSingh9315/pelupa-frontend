// app/layout.jsx
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Providers } from "./provider";

export const metadata = {
  title: "Pelupa",
  description: "Premium products delivered to your door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Providers>
        <Cart />
        <Header />
           <main className="min-h-screen">{children}</main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
