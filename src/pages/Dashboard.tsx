import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { TenantCard } from "@/components/TenantCard";
import { RevenueChart } from "@/components/RevenueChart";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Building2, TrendingUp, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your tenants.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Tenants"
            value={24}
            change={{ value: "12% from last month", positive: true }}
            icon={Building2}
            iconColor="text-primary"
          />
          <MetricCard
            title="Active Offers"
            value={48}
            change={{ value: "8% from last month", positive: true }}
            icon={TrendingUp}
            iconColor="text-success"
          />
          <MetricCard
            title="Total Investors"
            value={1247}
            change={{ value: "18% from last month", positive: true }}
            icon={Users}
            iconColor="text-accent"
          />
          <MetricCard
            title="Total Revenue"
            value="$553K"
            change={{ value: "23% from last month", positive: true }}
            icon={DollarSign}
            iconColor="text-success"
          />
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>

        {/* Tenants Grid */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Active Tenants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TenantCard
              name="TechCorp Investments"
              status="active"
              activeOffers={5}
              totalInvestors={156}
              revenue="$125,000"
            />
            <TenantCard
              name="FinanceGroup Capital"
              status="active"
              activeOffers={8}
              totalInvestors={243}
              revenue="$198,000"
            />
            <TenantCard
              name="StartupHub Ventures"
              status="active"
              activeOffers={3}
              totalInvestors={89}
              revenue="$76,000"
            />
            <TenantCard
              name="GrowthVentures LLC"
              status="pending"
              activeOffers={2}
              totalInvestors={45}
              revenue="$42,000"
            />
            <TenantCard
              name="InvestPro Partners"
              status="active"
              activeOffers={6}
              totalInvestors={187}
              revenue="$156,000"
            />
            <TenantCard
              name="NextGen Funding"
              status="active"
              activeOffers={4}
              totalInvestors={112}
              revenue="$98,000"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
