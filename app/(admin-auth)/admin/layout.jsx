// app/admin/(auth)/layout.jsx
export default function AuthLayout({ children }) {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      {children}
    </div>
  );
}
