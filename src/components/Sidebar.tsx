import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  TrendingUp, 
  Users, 
  FileText, 
  Bell,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Tenants", icon: Building2, path: "/tenants" },
  { title: "Offers", icon: TrendingUp, path: "/offers" },
  { title: "Investors", icon: Users, path: "/investors" },
  { title: "Billing", icon: FileText, path: "/billing" },
  { title: "Notifications", icon: Bell, path: "/notifications" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-heading font-bold text-sidebar-foreground">
          FinTrio
        </h1>
        <p className="text-sm text-sidebar-foreground/60 mt-1">Super Admin</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                "text-sidebar-foreground hover:bg-sidebar-accent",
                isActive && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="h-10 w-10 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-sm font-medium text-sidebar-foreground">SA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-foreground">Super Admin</p>
            <p className="text-xs text-sidebar-foreground/60">admin@fintrio.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
