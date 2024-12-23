import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export default function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full border-b h-20 gap-x-4 md:px-6">
        <div>
            <SidebarTrigger />
        </div>
        <div className="w-full flex items-center justify-center">
            <h1 className="font-bold text-2xl">NavBar Dashboard</h1>
        </div>
        <div className="flex items-center justify-end w-full gap-x-2">
            <UserButton />
        </div>
    </nav>
  );
}
