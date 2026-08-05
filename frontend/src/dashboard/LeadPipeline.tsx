type Props = {
  stats: {
    newLeads: number;
    contactedLeads: number;
    bookedLeads: number;
  } | null;
  loading: boolean;
};

export default function LeadPipeline({
  stats,
  loading,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Lead Pipeline
      </h2>

      <div className="space-y-5">

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              🆕 New Leads
            </span>

            <span className="font-bold text-blue-600">
              {loading ? "..." : stats?.newLeads ?? 0}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-blue-500"
              style={{
                width: `${
                  ((stats?.newLeads ?? 0) /
                    Math.max(stats?.newLeads ?? 1, 1)) *
                  100
                }%`,
              }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              📞 Contacted
            </span>

            <span className="font-bold text-amber-600">
              {loading ? "..." : stats?.contactedLeads ?? 0}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-amber-500"
              style={{
                width: `${
                  ((stats?.contactedLeads ?? 0) /
                    Math.max(stats?.newLeads ?? 1, 1)) *
                  100
                }%`,
              }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              ✅ Booked
            </span>

            <span className="font-bold text-emerald-600">
              {loading ? "..." : stats?.bookedLeads ?? 0}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-emerald-500"
              style={{
                width: `${
                  ((stats?.bookedLeads ?? 0) /
                    Math.max(stats?.newLeads ?? 1, 1)) *
                  100
                }%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}