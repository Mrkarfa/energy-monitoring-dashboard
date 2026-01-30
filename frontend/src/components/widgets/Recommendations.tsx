import { Widget } from "../layout/Widget";
import { Lightbulb, ArrowRight, Zap, Droplets } from "lucide-react";
import { cn } from "../../lib/utils";

interface Recommendation {
  id: string;
  type: "electricity" | "water";
  title: string;
  impact: string;
  difficulty: "Low" | "Medium" | "High";
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    type: "electricity",
    title: "Replace office lights with LED",
    impact: "Save ~15%",
    difficulty: "Low",
  },
  {
    id: "2",
    type: "water",
    title: "Install smart sensors in HVAC",
    impact: "Save ~8%",
    difficulty: "Medium",
  },
  {
    id: "3",
    type: "electricity",
    title: "Optimize server cooling",
    impact: "Save ~12%",
    difficulty: "Medium",
  },
];

export function Recommendations() {
  return (
    <Widget
      title="Recommendations"
      className="col-span-12 md:col-span-4 lg:col-span-3 min-h-[300px]"
      backgroundColor="light"
      action={
        <ArrowRight size={20} className="text-text-dark cursor-pointer" />
      }
    >
      <div className="flex flex-col gap-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-3 bg-white/50 rounded-xl border border-black/5 hover:bg-white/80 transition-colors cursor-pointer group"
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  rec.type === "electricity"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-blue-100 text-blue-600",
                )}
              >
                {rec.type === "electricity" ? (
                  <Zap size={16} />
                ) : (
                  <Droplets size={16} />
                )}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-dark leading-tight mb-1">
                  {rec.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                    {rec.impact}
                  </span>
                  <span className="text-xs text-text-label">
                    {rec.difficulty} effort
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-auto p-4 bg-green-primary/10 rounded-xl flex items-center gap-3">
          <Lightbulb size={24} className="text-green-primary" />
          <p className="text-xs text-text-dark leading-snug">
            Implementing top 3 recommendations could save you{" "}
            <strong>$1,240/mo</strong>.
          </p>
        </div>
      </div>
    </Widget>
  );
}
