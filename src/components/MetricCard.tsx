import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    positive: boolean;
  };
  icon: LucideIcon;
  iconColor?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon,
  iconColor = "text-primary"
}: MetricCardProps) => {
  return (
    <Card className="metric-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-heading font-bold text-foreground">{value}</p>
            {change && (
              <p className={change.positive ? "stat-increase" : "stat-decrease"}>
                {change.positive ? "↑" : "↓"} {change.value}
              </p>
            )}
          </div>
          <div className={`h-12 w-12 rounded-lg bg-secondary flex items-center justify-center ${iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
