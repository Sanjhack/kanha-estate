import { useEffect, useState } from "react";

import Header from "../components/Header";
import LeadTable from "../components/LeadTable";

import DashboardCards from "../dashboard/DashboardCards";
import LeadPipeline from "../dashboard/LeadPipeline";
import PropertyStatus from "../dashboard/PropertyStatus";
import QuickActions from "../dashboard/QuickActions";
import RecentProperties from "../dashboard/RecentProperties";

import { getAllEnquiries } from "../services/api";

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      // Load Leads
      const leadResponse = await getAllEnquiries();
      setLeads(leadResponse.data || []);

      // Load Dashboard Statistics
      const statsResponse = await fetch(
        "https://kanha-estate.onrender.com/api/dashboard/stats"
      );

      const statsData = await statsResponse.json();

      setStats(statsData.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      {/* KPI Cards */}

      <DashboardCards
        stats={stats}
        loading={loading}
      />

      {/* Analytics */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <LeadPipeline
          stats={stats}
          loading={loading}
        />

        <PropertyStatus
          stats={stats}
          loading={loading}
        />

      </div>

      {/* Quick Actions */}

      <QuickActions />

      {/* Recent Properties */}

      <div className="mt-6">

        <RecentProperties />

      </div>

      {/* Recent Enquiries */}

      <div className="mt-8 bg-white rounded-2xl shadow-md border border-slate-200 p-6">

        <div className="flex justify-between items-center mb-6">

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

          <div className="text-center py-12 text-gray-500">
            Loading enquiries...
          </div>

        ) : leads.length === 0 ? (

          <div className="text-center py-12 text-gray-500">
            No enquiries found.
          </div>

        ) : (

          <LeadTable leads={leads} />

        )}

      </div>

    </div>
  );
}