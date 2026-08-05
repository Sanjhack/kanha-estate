type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  plot: string;
  message: string;
  status: string;
  created_at: string;
};

type Props = {
  open: boolean;
  lead: Lead | null;
  onClose: () => void;
};

export default function ViewLeadModal({
  open,
  lead,
  onClose,
}: Props) {
  if (!open || !lead) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold text-slate-800">
            Lead Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-2xl"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">
              Customer Name
            </p>

            <h3 className="font-semibold text-lg">
              {lead.name}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Phone
            </p>

            <h3 className="font-semibold">
              {lead.phone}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <h3 className="font-semibold break-all">
              {lead.email || "-"}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Interested Plot
            </p>

            <h3 className="font-semibold">
              {lead.plot || "-"}
            </h3>
          </div>

          <div className="col-span-2">
            <p className="text-sm text-gray-500">
              Message
            </p>

            <div className="mt-2 rounded-xl bg-slate-100 p-4 min-h-[80px]">
              {lead.message || "No message"}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <span
              className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-medium ${
                lead.status === "New"
                  ? "bg-blue-100 text-blue-700"
                  : lead.status === "Contacted"
                  ? "bg-yellow-100 text-yellow-700"
                  : lead.status === "Booked"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {lead.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Created On
            </p>

            <h3 className="font-semibold">
              {new Date(
                lead.created_at
              ).toLocaleDateString()}
            </h3>
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}