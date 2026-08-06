type Props = {
  open: boolean;
  followUp: any;
  onClose: () => void;
};

export default function ViewFollowUpModal({
  open,
  followUp,
  onClose,
}: Props) {

  if (!open || !followUp) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Follow Up Details
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-gray-500 text-sm">Customer</p>
            <p className="font-semibold">{followUp.customer_name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p>{followUp.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Date</p>
            <p>{followUp.followup_date}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Time</p>
            <p>{followUp.followup_time}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Type</p>
            <p>{followUp.followup_type}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Priority</p>
            <p>{followUp.priority}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <p>{followUp.status}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Sales Person</p>
            <p>{followUp.sales_person}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Notes</p>
            <p>{followUp.notes || "-"}</p>
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="bg-slate-800 text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}