// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Pelupa',
  description: 'Premium products delivered to your door',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <main className="min-h-screen px-4 md:px-8 py-6">{children}</main>
      </body>
    </html>
  );
}
