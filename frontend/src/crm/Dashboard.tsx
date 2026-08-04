import { useEffect, useState } from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import LeadTable from "../components/LeadTable";
import { getAllEnquiries } from "../services/api";

import {
  Users,
  UserPlus,
  PhoneCall,
  BadgeCheck,
} from "lucide-react";

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const response = await getAllEnquiries();
      setLeads(response.data);
    } catch (error) {
      console.error("Failed to load enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalLeads = leads.length;
  const newLeads = leads.filter((lead) => lead.status === "New").length;
  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Leads"
          value={loading ? "..." : totalLeads}
          subtitle="Live Database"
          icon={Users}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-600"
        />

        <StatsCard
          title="New Leads"
          value={loading ? "..." : newLeads}
          subtitle="Fresh Enquiries"
          icon={UserPlus}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />

        <StatsCard
          title="Contacted"
          value={loading ? "..." : contactedLeads}
          subtitle="Awaiting Calls"
          icon={PhoneCall}
          iconBg="bg-amber-100"
          iconColor="text-amber-600"
        />

        <StatsCard
          title="Bookings"
          value={0}
          subtitle="Closed Deals"
          icon={BadgeCheck}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />

      </div>

      {/* Recent Enquiries */}
      <div className="mt-10 bg-white rounded-2xl shadow-md border border-slate-200 p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Enquiries
          </h2>

          <span className="text-sm text-gray-500">
            {loading
              ? "Loading..."
              : `${leads.length} Lead${leads.length !== 1 ? "s" : ""}`}
          </span>

        </div>

        {loading ? (
          <div className="py-12 text-center text-gray-500">
            Loading enquiries...
          </div>
        ) : leads.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            No enquiries found.
          </div>
        ) : (
          <LeadTable leads={leads} />
        )}

      </div>

    </div>
  );
}