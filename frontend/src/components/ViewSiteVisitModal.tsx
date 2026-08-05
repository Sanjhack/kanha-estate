type SiteVisit = {
  id: number;
  customer_name?: string;
  phone?: string;
  plot_number?: string;
  project_name?: string;
  visit_date: string;
  visit_time: string;
  sales_person: string;
  status: string;
  remarks: string;
};

type Props = {
  open: boolean;
  visit: SiteVisit | null;
  onClose: () => void;
};

export default function ViewSiteVisitModal({
  open,
  visit,
  onClose,
}: Props) {
  if (!open || !visit) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Site Visit Details
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-gray-500 text-sm">Customer</p>
            <p className="font-semibold">
              {visit.customer_name || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-semibold">
              {visit.phone || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Property</p>
            <p className="font-semibold">
              {visit.plot_number || "-"}{" "}
              {visit.project_name
                ? `(${visit.project_name})`
                : ""}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Visit Date</p>
            <p className="font-semibold">
              {visit.visit_date}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Visit Time</p>
            <p className="font-semibold">
              {visit.visit_time}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Sales Person</p>
            <p className="font-semibold">
              {visit.sales_person}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                visit.status === "Scheduled"
                  ? "bg-blue-100 text-blue-700"
                  : visit.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {visit.status}
            </span>

          </div>

          <div>
            <p className="text-gray-500 text-sm">Remarks</p>
            <p>{visit.remarks || "-"}</p>
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-900"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}