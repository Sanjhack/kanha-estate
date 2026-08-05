import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getDashboardStats } from "../services/api";
import {
  Users,
  Building2,
  CalendarDays,
  PhoneCall,
  CheckCircle2,
  Clock3,
  Home,
  FileBarChart,
} from "lucide-react";

type DashboardStats = {
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  bookedLeads: number;

  totalProperties: number;
  availableProperties: number;
  reservedProperties: number;
  soldProperties: number;

  totalSiteVisits: number;
  scheduledVisits: number;
  completedVisits: number;
  cancelledVisits: number;

  totalFollowUps: number;
  pendingFollowUps: number;
  completedFollowUps: number;
  missedFollowUps: number;
};

export default function Reports() {

  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardStats>({
    totalLeads: 0,
    newLeads: 0,
    contactedLeads: 0,
    bookedLeads: 0,

    totalProperties: 0,
    availableProperties: 0,
    reservedProperties: 0,
    soldProperties: 0,

    totalSiteVisits: 0,
    scheduledVisits: 0,
    completedVisits: 0,
    cancelledVisits: 0,

    totalFollowUps: 0,
    pendingFollowUps: 0,
    completedFollowUps: 0,
    missedFollowUps: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {

    try {

      const response = await getDashboardStats();

      setStats(response.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  function Card({
    title,
    value,
    icon,
    color,
  }: {
    title: string;
    value: number;
    icon: React.ReactNode;
    color: string;
  }) {
    return (

      <div className={`rounded-2xl border p-5 bg-white shadow-sm hover:shadow-lg transition ${color}`}>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-500 text-sm">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {value}
            </h2>

          </div>

          <div className="opacity-80">

            {icon}

          </div>

        </div>

      </div>

    );
  }

  if (loading) {

    return (

      <div className="flex-1 bg-slate-100 min-h-screen p-8">

        <Header />

        <div className="bg-white rounded-2xl p-12 mt-8 text-center">

          Loading Reports...

        </div>

      </div>

    );

  }

  return (

    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      <div className="bg-white rounded-2xl shadow-md p-8 mt-6">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Reports Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Business Summary & Statistics
            </p>

          </div>

          <FileBarChart size={42} className="text-emerald-600" />

        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <Card
            title="Total Leads"
            value={stats.totalLeads}
            icon={<Users size={34} />}
            color="border-emerald-200"
          />

          <Card
            title="New Leads"
            value={stats.newLeads}
            icon={<Users size={34} />}
            color="border-blue-200"
          />

          <Card
            title="Contacted"
            value={stats.contactedLeads}
            icon={<PhoneCall size={34} />}
            color="border-orange-200"
          />

          <Card
            title="Booked"
            value={stats.bookedLeads}
            icon={<CheckCircle2 size={34} />}
            color="border-green-200"
          />

          <Card
            title="Properties"
            value={stats.totalProperties}
            icon={<Building2 size={34} />}
            color="border-purple-200"
          />

          <Card
            title="Available"
            value={stats.availableProperties}
            icon={<Home size={34} />}
            color="border-emerald-200"
          />

          <Card
            title="Reserved"
            value={stats.reservedProperties}
            icon={<Clock3 size={34} />}
            color="border-yellow-300"
          />

          <Card
            title="Sold"
            value={stats.soldProperties}
            icon={<CheckCircle2 size={34} />}
            color="border-red-200"
          />

          <Card
            title="Site Visits"
            value={stats.totalSiteVisits}
            icon={<CalendarDays size={34} />}
            color="border-cyan-200"
          />

          <Card
            title="Scheduled"
            value={stats.scheduledVisits}
            icon={<Clock3 size={34} />}
            color="border-orange-200"
          />

          <Card
            title="Completed Visits"
            value={stats.completedVisits}
            icon={<CheckCircle2 size={34} />}
            color="border-green-200"
          />

          <Card
            title="Cancelled"
            value={stats.cancelledVisits}
            icon={<CheckCircle2 size={34} />}
            color="border-red-200"
          />

          <Card
            title="Follow Ups"
            value={stats.totalFollowUps}
            icon={<PhoneCall size={34} />}
            color="border-indigo-200"
          />

          <Card
            title="Pending"
            value={stats.pendingFollowUps}
            icon={<Clock3 size={34} />}
            color="border-yellow-300"
          />

          <Card
            title="Completed"
            value={stats.completedFollowUps}
            icon={<CheckCircle2 size={34} />}
            color="border-green-200"
          />

          <Card
            title="Missed"
            value={stats.missedFollowUps}
            icon={<PhoneCall size={34} />}
            color="border-red-200"
          />

        </div>

        {/* Analytics */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                      {/* Lead Funnel */}

          <div className="bg-slate-50 rounded-2xl p-6 border">

            <h2 className="text-xl font-bold mb-6">
              Lead Funnel
            </h2>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span>New Leads</span>
                  <span>{stats.newLeads}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-emerald-500"
                    style={{
                      width: `${stats.totalLeads ? (stats.newLeads / stats.totalLeads) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Contacted</span>
                  <span>{stats.contactedLeads}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-blue-500"
                    style={{
                      width: `${stats.totalLeads ? (stats.contactedLeads / stats.totalLeads) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Booked</span>
                  <span>{stats.bookedLeads}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-green-600"
                    style={{
                      width: `${stats.totalLeads ? (stats.bookedLeads / stats.totalLeads) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Property Status */}

          <div className="bg-slate-50 rounded-2xl p-6 border">

            <h2 className="text-xl font-bold mb-6">
              Property Status
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Available</span>
                <strong>{stats.availableProperties}</strong>
              </div>

              <div className="flex justify-between">
                <span>Reserved</span>
                <strong>{stats.reservedProperties}</strong>
              </div>

              <div className="flex justify-between">
                <span>Sold</span>
                <strong>{stats.soldProperties}</strong>
              </div>

            </div>

          </div>

        </div>

        {/* Business Insights */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Business Insights
            </h2>

            <ul className="space-y-3 text-gray-700">

              <li>
                📌 Total Leads : <strong>{stats.totalLeads}</strong>
              </li>

              <li>
                🏘 Available Properties : <strong>{stats.availableProperties}</strong>
              </li>

              <li>
                📅 Scheduled Visits : <strong>{stats.scheduledVisits}</strong>
              </li>

              <li>
                📞 Pending Follow Ups : <strong>{stats.pendingFollowUps}</strong>
              </li>

            </ul>

          </div>

          <div className="bg-slate-50 border rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Export Center
            </h2>

            <div className="grid gap-4">

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3">
                📄 Export PDF
              </button>

              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3">
                📊 Export Excel
              </button>

              <button className="bg-slate-800 hover:bg-black text-white rounded-xl py-3">
                🖨 Print Report
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}