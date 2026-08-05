import { useEffect, useState } from "react";
import { updateFollowUp } from "../services/api";

type Props = {
  open: boolean;
  followUp: any;
  onClose: () => void;
  onSuccess: () => void;
};

type Lead = {
  id: number;
  name: string;
  phone: string;
};

export default function EditFollowUpModal({
  open,
  followUp,
  onClose,
  onSuccess,
}: Props) {

  const [loading, setLoading] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);

  const [formData, setFormData] = useState({
    lead_id: "",
    followup_date: "",
    followup_time: "",
    followup_type: "Call",
    priority: "Medium",
    status: "Pending",
    sales_person: "",
    notes: "",
  });

  useEffect(() => {

    if (open && followUp) {

      loadLeads();

      setFormData({
        lead_id: String(followUp.lead_id ?? ""),
        followup_date: followUp.followup_date ?? "",
        followup_time: followUp.followup_time ?? "",
        followup_type: followUp.followup_type ?? "Call",
        priority: followUp.priority ?? "Medium",
        status: followUp.status ?? "Pending",
        sales_person: followUp.sales_person ?? "",
        notes: followUp.notes ?? "",
      });

    }

  }, [open, followUp]);

  async function loadLeads() {

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/enquiries/dropdown"
      );

      const json = await response.json();

      setLeads(json.data || []);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await updateFollowUp(followUp.id, {
        lead_id: Number(formData.lead_id),
        followup_date: formData.followup_date,
        followup_time: formData.followup_time,
        followup_type: formData.followup_type,
        priority: formData.priority,
        status: formData.status,
        sales_person: formData.sales_person,
        notes: formData.notes,
      });

      onSuccess();
      onClose();

    } catch (err) {

      console.error(err);

      alert("Failed to update follow up.");

    }

  }

  if (!open || !followUp) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">

    <h2 className="text-2xl font-bold mb-6">
      Edit Follow Up
    </h2>

    {loading ? (

      <div className="py-12 text-center">
        Loading...
      </div>

    ) : (

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* Customer */}

        <select
          required
          value={formData.lead_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              lead_id: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="">
            Select Customer
          </option>

          {leads.map((lead) => (

            <option
              key={lead.id}
              value={lead.id}
            >
              {lead.name} ({lead.phone})
            </option>

          ))}

        </select>

        {/* Follow Up Date */}

        <input
          type="date"
          required
          value={formData.followup_date}
          onChange={(e) =>
            setFormData({
              ...formData,
              followup_date: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        {/* Follow Up Time */}

        <input
          type="time"
          required
          value={formData.followup_time}
          onChange={(e) =>
            setFormData({
              ...formData,
              followup_time: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        {/* Follow Up Type */}

        <select
          value={formData.followup_type}
          onChange={(e) =>
            setFormData({
              ...formData,
              followup_type: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="Call">Call</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Meeting">Meeting</option>
          <option value="Email">Email</option>
        </select>

        {/* Priority */}

        <select
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,
              priority: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* Status */}

        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Missed">Missed</option>
        </select>

        {/* Sales Person */}

        <input
          type="text"
          placeholder="Sales Person"
          value={formData.sales_person}
          onChange={(e) =>
            setFormData({
              ...formData,
              sales_person: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        {/* Notes */}

        <textarea
          rows={4}
          placeholder="Notes"
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        <div className="flex justify-end gap-3 pt-4">

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-xl border hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >
            Save Changes
          </button>

        </div>

      </form>

    )}

  </div>

</div>

  );
}