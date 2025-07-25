import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import "../globals.css"
export default async function Layout({ children}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <div className={"border-b border-zinc-300 flex items-center"} >
              <SidebarTrigger/>
               
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
