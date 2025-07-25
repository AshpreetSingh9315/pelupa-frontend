// app/(public)/layout.jsx
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Cart from "@/app/components/Cart";
import { Providers } from "./provider";

export default function PublicLayout({ children }) {
  return (
    <Providers>
      <Cart />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </Providers>
  );
}
