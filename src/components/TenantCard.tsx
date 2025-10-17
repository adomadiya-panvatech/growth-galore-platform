import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Users } from "lucide-react";

interface TenantCardProps {
  name: string;
  status: "active" | "pending" | "inactive";
  activeOffers: number;
  totalInvestors: number;
  revenue: string;
}

export const TenantCard = ({ 
  name, 
  status, 
  activeOffers, 
  totalInvestors, 
  revenue 
}: TenantCardProps) => {
  const statusColors = {
    active: "bg-success-light text-success",
    pending: "bg-warning/10 text-warning",
    inactive: "bg-muted text-muted-foreground",
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-heading">{name}</CardTitle>
              <Badge variant="secondary" className={statusColors[status]}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Active Offers
            </span>
            <span className="font-medium text-foreground">{activeOffers}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Users className="h-4 w-4" />
              Investors
            </span>
            <span className="font-medium text-foreground">{totalInvestors}</span>
          </div>
          <div className="pt-3 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Revenue</span>
              <span className="text-lg font-heading font-bold text-success">{revenue}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
