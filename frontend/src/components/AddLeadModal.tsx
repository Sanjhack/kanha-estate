import { useState } from "react";
import { createEnquiry } from "../services/api";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddLeadModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plot: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      alert("Name and Phone are required.");
      return;
    }

    try {
      setLoading(true);

      await createEnquiry(form);

      alert("Lead added successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        plot: "",
        message: "",
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to add lead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          Add New Lead
        </h2>

        <div className="space-y-4">

          <input
            name="name"
            placeholder="Customer Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="plot"
            placeholder="Plot Size"
            value={form.plot}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            name="message"
            placeholder="Customer Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >
            {loading ? "Saving..." : "Save Lead"}
          </button>

        </div>

      </div>

    </div>
  );
}
