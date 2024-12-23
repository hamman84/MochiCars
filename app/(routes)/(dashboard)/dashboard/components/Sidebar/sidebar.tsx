"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";
import { adminItems, generalItems } from "./sibar-items";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { isAdmin } from "@/lib/isAdmin";
import { useAuth } from "@clerk/nextjs";

export function AppSidebar() {
    const {userId} = useAuth()
    const pathname = usePathname()
    return (
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center space-x-2 justify-center cursor-pointer">
            <Image
              src="/moshidev-logo.png"
              width={50}
              height={50}
              alt="Mochi logo"
            />
            <h1 className="font-bold text-2xl">
              Mochi<span className="text-blue-800">Cars</span>
            </h1>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>General</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {generalItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                    >
                      <a href={item.href}>
                        <item.icon size={24} />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Separator />
          
          {isAdmin(userId) && (
            <SidebarGroup>
              <SidebarGroupLabel>Administration</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {adminItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                      >
                        <a href={item.href}>
                          <item.icon size={24} />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>
      </Sidebar>
    );
}