import { Navigation } from "./Navigation";
import { User, Bell } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary font-primary">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-background-tertiary border-b border-border-primary h-16 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="w-8 h-8 bg-green-primary rounded-lg flex items-center justify-center font-bold text-lg text-white">
            E
          </div>
          <Navigation />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-text-secondary hover:text-text-primary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background-tertiary" />
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-border-secondary">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-text-primary">John Doe</p>
              <p className="text-xs text-text-secondary">Premium User</p>
            </div>
            <div className="w-8 h-8 bg-background-secondary rounded-full flex items-center justify-center border border-border-primary overflow-hidden">
              <User size={18} className="text-text-secondary" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1920px] mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6">
          {children}
        </div>
      </main>
    </div>
  );
}
