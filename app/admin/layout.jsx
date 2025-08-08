import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import "../globals.css";

export default async function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <div className="border-b border-zinc-300 flex items-center bg-[#FAFAFA] px-4 py-2 gap-2">
              <SidebarTrigger />
              {/* ⬅️ Left arrow icon with label */}
              <span className="flex items-center text-sm text-gray-600">
                Click to toggle sidebar
              </span>
            </div>

            <div className="p-8 bg-gray-100 min-h-[100vh]">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

