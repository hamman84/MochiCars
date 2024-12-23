import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./dashboard/components/Sidebar/sidebar";
import NavbarDashboard from "./dashboard/components/Navbar/NavbarDashboard";

export default function LayoutDashboard({children}: {children: React.ReactNode;}) {
    return (
      <div className=" flex w-full h-full">
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full h-full">
            <NavbarDashboard />
            <div className="p-6 h-max">{children}</div>
          </div>
        </SidebarProvider>
      </div>
    );
}