import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { Widget } from "../layout/Widget";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface EnergyData {
  category: string;
  value: number;
  unit: string;
  trend: "up" | "down" | "neutral";
  trendValue: number;
  chartData: { value: number }[];
}

const mockData: EnergyData[] = [
  {
    category: "Electricity",
    value: 12450,
    unit: "kWh",
    trend: "down",
    trendValue: 12,
    chartData: Array.from({ length: 12 }).map(() => ({
      value: Math.random() * 100,
    })),
  },
  {
    category: "Water",
    value: 3400,
    unit: "m³",
    trend: "up",
    trendValue: 5,
    chartData: Array.from({ length: 12 }).map(() => ({
      value: Math.random() * 100,
    })),
  },
  {
    category: "Gas",
    value: 890,
    unit: "m³",
    trend: "neutral",
    trendValue: 0,
    chartData: Array.from({ length: 12 }).map(() => ({
      value: Math.random() * 100,
    })),
  },
];

export function TotalEnergyConsumption() {
  return (
    <Widget
      title="Total Energy Consumption"
      subtitle="Monthly Overview"
      menu
      action={
        <button className="px-3 py-1.5 text-xs font-medium border border-border-primary rounded-lg hover:bg-bg-hover transition-colors text-text-secondary">
          Change module
        </button>
      }
      className="col-span-12 lg:col-span-6 h-full min-h-[300px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockData.map((item) => (
          <div key={item.category} className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-text-secondary flex items-center gap-1">
                {item.trend === "up" && (
                  <ArrowUpRight size={14} className="text-accent-warning" />
                )}
                {item.trend === "down" && (
                  <ArrowDownRight size={14} className="text-accent-success" />
                )}
                {item.trend === "neutral" && (
                  <Minus size={14} className="text-text-secondary" />
                )}
                {item.category}
              </span>
            </div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              {item.value.toLocaleString()}
            </div>
            <div className="text-xs text-text-secondary mb-3">{item.unit}</div>

            <div className="h-16 mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={item.chartData}>
                  <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                    {item.chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={Math.random() > 0.5 ? "#FFFFFF" : "#2A2F2D"}
                        fillOpacity={Math.random() > 0.5 ? 1 : 0.3}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
}
