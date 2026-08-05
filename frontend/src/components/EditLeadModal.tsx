import { useEffect, useState } from "react";
import { updateEnquiry } from "../services/api";

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  plot?: string;
  message?: string;
  status: string;
};

type Props = {
  open: boolean;
  lead: Lead | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditLeadModal({
  open,
  lead,
  onClose,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plot: "",
    message: "",
    status: "New",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (lead) {
      setForm({
        name: lead.name || "",
        phone: lead.phone || "",
        email: lead.email || "",
        plot: lead.plot || "",
        message: lead.message || "",
        status: lead.status || "New",
      });
    }
  }, [lead]);

  if (!open || !lead) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!form.name || !form.phone) {
      alert("Name and Phone are required.");
      return;
    }

    try {
      setLoading(true);

      await updateEnquiry(lead.id, form);

      alert("Lead updated successfully.");

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update lead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Edit Lead
        </h2>

        <div className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Customer Name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="plot"
            value={form.plot}
            onChange={handleChange}
            placeholder="Plot"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Booked</option>
            <option>Lost</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border rounded-xl px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6 py-3"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </div>
  );
}