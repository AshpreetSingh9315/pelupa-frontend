"use client";
import {
  Home,
  Inbox,
  Settings,
  User2,
  ShoppingCart,
  Tag,
  Users,
  Image,
  BookText,
  ChevronUp,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home, // Dashboard
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: ShoppingCart, // Orders
  },
  {
    title: "Category",
    url: "/admin/category",
    icon: Tag, // Categories
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: Inbox, // Products
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users, // Users
  },
  {
    title: "Banners",
    url: "/admin/banners",
    icon: Image, // Banners/Media
  },
  {
    title: "Blogs",
    url: "/admin/blogs",
    icon: BookText, // Blogs/Articles
  },
  {
    title: "Settings (Pelupa Details)",
    url: "/admin/settings",
    icon: Settings, // Settings
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className={""}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel
            className={
              "text-2xl text-center text-black tracking-tighter font-bold"
            }
          >
            Pelupa Admin.
          </SidebarGroupLabel>
          <SidebarGroupContent className={"py-3"}>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`py-6 text-lg flex items-center gap-2 px-4 rounded transition-all ${
                          isActive
                            ? "bg-[#5D62B5] text-white"
                            : "hover:bg-[#3e45c7]"
                        }`}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Pelupa
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-full block">
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
