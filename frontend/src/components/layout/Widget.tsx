import { MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";

interface WidgetProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  menu?: boolean;
  className?: string;
  backgroundColor?: "dark" | "light";
  children: React.ReactNode;
}

export function Widget({
  title,
  subtitle,
  action,
  menu,
  className,
  backgroundColor = "dark",
  children,
}: WidgetProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 shadow-lg transition-all border border-border-secondary",
        backgroundColor === "dark"
          ? "bg-background-tertiary"
          : "bg-widget-light",
        className,
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3
            className={cn(
              "text-xl font-semibold",
              backgroundColor === "dark"
                ? "text-text-primary"
                : "text-text-dark",
            )}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {action}
          {menu && (
            <button className="p-1 hover:bg-bg-hover rounded-md transition-colors text-text-secondary">
              <MoreHorizontal size={20} />
            </button>
          )}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
