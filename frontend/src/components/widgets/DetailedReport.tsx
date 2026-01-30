import { Widget } from "../layout/Widget";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const metrics = [
  {
    label: "Carbon Footprint",
    value: "2.4 tons",
    change: "-12%",
    trend: "down",
  },
  { label: "Energy Cost", value: "$1,240", change: "+5%", trend: "up" },
  { label: "Efficiency Score", value: "A+", change: "Top 5%", trend: "up" },
  { label: "Grid Dependency", value: "45%", change: "-8%", trend: "down" },
];

export function DetailedReport() {
  return (
    <Widget
      title="Detailed Report"
      className="col-span-12 lg:col-span-6 min-h-[300px]"
      action={
        <button className="text-xs text-text-secondary hover:text-text-primary">
          View Full Report
        </button>
      }
    >
      <div className="grid grid-cols-2 gap-4 h-full">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-background-secondary rounded-xl p-4 border border-border-secondary flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <span className="text-sm text-text-secondary">
                {metric.label}
              </span>
              <span
                className={`flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${
                  metric.trend === "down"
                    ? "bg-green-primary/20 text-accent-success"
                    : "bg-red-500/10 text-accent-error"
                }`}
              >
                {metric.change}
                {metric.trend === "down" ? (
                  <ArrowDownRight size={12} className="ml-1" />
                ) : (
                  <ArrowUpRight size={12} className="ml-1" />
                )}
              </span>
            </div>
            <div className="text-2xl font-bold text-text-primary mt-2">
              {metric.value}
            </div>

            <div className="w-full bg-background rounded-full h-1.5 mt-4 overflow-hidden">
              <div
                className={`h-full rounded-full ${metric.trend === "down" ? "bg-accent-success" : "bg-accent-warning"}`}
                style={{ width: `${Math.random() * 40 + 40}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
}
