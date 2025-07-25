// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Pelupa",
  description: "Premium products delivered to your door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
