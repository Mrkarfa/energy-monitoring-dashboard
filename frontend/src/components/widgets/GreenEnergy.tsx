import { Widget } from "../layout/Widget";
import { Sun, Wind } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Solar", value: 65, color: "#F59E0B" },
  { name: "Wind", value: 25, color: "#3B82F6" },
  { name: "Grid", value: 10, color: "#2A2F2D" },
];

export function GreenEnergy() {
  return (
    <Widget
      title="Green Energy"
      subtitle="Source Breakdown"
      className="col-span-12 md:col-span-4 lg:col-span-3 min-h-[300px]"
    >
      <div className="flex items-center justify-center relative h-[180px] my-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-text-primary">90%</span>
          <span className="text-xs text-text-secondary">Renewable</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-background-secondary">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <Sun size={18} />
          </div>
          <div>
            <div className="text-xs text-text-secondary">Solar</div>
            <div className="text-sm font-bold text-text-primary">65%</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg bg-background-secondary">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Wind size={18} />
          </div>
          <div>
            <div className="text-xs text-text-secondary">Wind</div>
            <div className="text-sm font-bold text-text-primary">25%</div>
          </div>
        </div>
      </div>
    </Widget>
  );
}
