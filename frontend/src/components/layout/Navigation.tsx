import { LayoutDashboard, Building, PieChart, Settings } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navigationItems: NavItem[] = [
  { label: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
  { label: "My apartments", path: "/apartments", icon: <Building size={20} /> },
  { label: "Reporting", path: "/reporting", icon: <PieChart size={20} /> },
  { label: "Settings", path: "/settings", icon: <Settings size={20} /> },
];

export function Navigation() {
  const activePath = "/"; // Static for now, would use router in real app

  return (
    <nav className="flex gap-6">
      {navigationItems.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors relative",
            activePath === item.path
              ? "text-primary"
              : "text-text-secondary hover:text-text-primary",
          )}
        >
          {item.icon}
          {item.label}
          {activePath === item.path && (
            <div className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-white rounded-full" />
          )}
        </a>
      ))}
    </nav>
  );
}
