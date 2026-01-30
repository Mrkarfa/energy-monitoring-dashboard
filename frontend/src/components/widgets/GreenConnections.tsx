import { Widget } from "../layout/Widget";
import { BuildingModel } from "../3d/BuildingModel";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "../../lib/utils";

interface Connection {
  id: string;
  name: string;
  connected: boolean;
  value: string;
}

const connections: Connection[] = [
  { id: "1", name: "Main Grid", connected: true, value: "230V" },
  { id: "2", name: "Solar Array A", connected: true, value: "4.5kW" },
  { id: "3", name: "Backup Battery", connected: false, value: "Disconnected" },
];

export function GreenConnections() {
  return (
    <Widget
      title="Green Connections"
      subtitle="Live Status"
      className="col-span-12 md:col-span-4 lg:col-span-3 min-h-[300px]"
      backgroundColor="dark"
    >
      <div className="flex flex-col h-full">
        <BuildingModel />

        <div className="mt-4 space-y-3">
          {connections.map((conn) => (
            <div
              key={conn.id}
              className="flex items-center justify-between p-2 rounded-lg bg-background-secondary border border-border-secondary"
            >
              <div className="flex items-center gap-2">
                {conn.connected ? (
                  <CheckCircle2 size={16} className="text-accent-success" />
                ) : (
                  <AlertCircle size={16} className="text-text-secondary" />
                )}
                <span
                  className={cn(
                    "text-sm",
                    conn.connected
                      ? "text-text-primary"
                      : "text-text-secondary",
                  )}
                >
                  {conn.name}
                </span>
              </div>
              <span className="text-xs text-text-secondary font-mono">
                {conn.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Widget>
  );
}
