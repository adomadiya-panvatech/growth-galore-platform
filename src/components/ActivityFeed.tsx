import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Activity {
  id: string;
  type: "offer" | "investor" | "tenant" | "billing";
  title: string;
  description: string;
  time: string;
  status?: "success" | "warning" | "info";
}

const activities: Activity[] = [
  {
    id: "1",
    type: "offer",
    title: "New Offer Published",
    description: "TechCorp launched 'Series A Growth Fund'",
    time: "2 hours ago",
    status: "success",
  },
  {
    id: "2",
    type: "investor",
    title: "Investor Milestone",
    description: "FinanceGroup reached 100 active investors",
    time: "5 hours ago",
    status: "info",
  },
  {
    id: "3",
    type: "billing",
    title: "Payment Received",
    description: "StartupHub paid invoice #INV-2024-045",
    time: "1 day ago",
    status: "success",
  },
  {
    id: "4",
    type: "tenant",
    title: "New Tenant Onboarded",
    description: "GrowthVentures completed setup",
    time: "2 days ago",
    status: "success",
  },
];

export const ActivityFeed = () => {
  const statusColors = {
    success: "bg-success-light text-success",
    warning: "bg-warning/10 text-warning",
    info: "bg-primary-light text-primary",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-sm text-foreground">{activity.title}</p>
                  {activity.status && (
                    <Badge variant="secondary" className={statusColors[activity.status]}>
                      {activity.status}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
