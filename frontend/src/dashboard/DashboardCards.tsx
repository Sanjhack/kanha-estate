import {
  Users,
  Home,
  BadgeCheck,
  IndianRupee,
} from "lucide-react";

import StatsCard from "../components/StatsCard";

type Props = {
  stats: {
    totalLeads: number;
    availableProperties: number;
    bookedLeads: number;
  } | null;
  loading: boolean;
};

export default function DashboardCards({
  stats,
  loading,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatsCard
        title="Total Leads"
        value={loading ? "..." : stats?.totalLeads ?? 0}
        subtitle="All Enquiries"
        icon={Users}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <StatsCard
        title="Available Properties"
        value={loading ? "..." : stats?.availableProperties ?? 0}
        subtitle="Ready To Sell"
        icon={Home}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <StatsCard
        title="Bookings"
        value={loading ? "..." : stats?.bookedLeads ?? 0}
        subtitle="Converted Leads"
        icon={BadgeCheck}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />

      <StatsCard
        title="Revenue"
        value="₹0"
        subtitle="Coming Soon"
        icon={IndianRupee}
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
      />

    </div>
  );
}