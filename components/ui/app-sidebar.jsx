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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home, // Dashboard
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingCart, // Orders
  },
  {
    title: "Category",
    url: "/category",
    icon: Tag, // Categories
  },
  {
    title: "Products",
    url: "/products",
    icon: Inbox, // Products
  },
  {
    title: "Users",
    url: "/users",
    icon: Users, // Users
  },
  {
    title: "Banners",
    url: "/banners",
    icon: Image, // Banners/Media
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: BookText, // Blogs/Articles
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings, // Settings
  },
];

export function AppSidebar() {
  return (
    <Sidebar className={"bg-[#171717]"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pelupa</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild >
                    <a href={item.url} className={"py-6 text-lg"}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-full block"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
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
