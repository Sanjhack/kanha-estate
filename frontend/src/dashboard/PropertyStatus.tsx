type Props = {
  stats: {
    availableProperties: number;
    reservedProperties: number;
    soldProperties: number;
    totalProperties: number;
  } | null;
  loading: boolean;
};

export default function PropertyStatus({
  stats,
  loading,
}: Props) {
  const total = Math.max(stats?.totalProperties ?? 1, 1);

  const getPercentage = (value: number) =>
    (value / total) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Property Status
      </h2>

      <div className="space-y-5">

        {/* Available */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              🟢 Available
            </span>

            <span className="font-bold text-green-600">
              {loading ? "..." : stats?.availableProperties ?? 0}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-green-500"
              style={{
                width: `${getPercentage(
                  stats?.availableProperties ?? 0
                )}%`,
              }}
            />

          </div>

        </div>

        {/* Reserved */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              🟡 Reserved
            </span>

            <span className="font-bold text-yellow-600">
              {loading ? "..." : stats?.reservedProperties ?? 0}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-yellow-500"
              style={{
                width: `${getPercentage(
                  stats?.reservedProperties ?? 0
                )}%`,
              }}
            />

          </div>

        </div>

        {/* Sold */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              🔴 Sold
            </span>

            <span className="font-bold text-red-600">
              {loading ? "..." : stats?.soldProperties ?? 0}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-red-500"
              style={{
                width: `${getPercentage(
                  stats?.soldProperties ?? 0
                )}%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}