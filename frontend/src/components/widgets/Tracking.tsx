import { Widget } from "../layout/Widget";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 4000 },
  { day: "Tue", value: 3000 },
  { day: "Wed", value: 2000 },
  { day: "Thu", value: 2780 },
  { day: "Fri", value: 1890 },
  { day: "Sat", value: 2390 },
  { day: "Sun", value: 3490 },
];

export function Tracking() {
  return (
    <Widget
      title="Tracking"
      subtitle="Daily Consumption"
      className="col-span-12 md:col-span-4 lg:col-span-3 min-h-[300px]"
    >
      <div className="h-[200px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4A7A5F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4A7A5F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7470", fontSize: 10 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "#151A18",
                borderColor: "#2D4A3E",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4A7A5F"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-4 px-2">
        <div className="text-center">
          <p className="text-xs text-text-secondary">Peak</p>
          <p className="text-lg font-bold text-text-primary">4.2 kW</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-text-secondary">Average</p>
          <p className="text-lg font-bold text-text-primary">2.8 kW</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-text-secondary">Low</p>
          <p className="text-lg font-bold text-text-primary">1.1 kW</p>
        </div>
      </div>
    </Widget>
  );
}
