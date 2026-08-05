import { useState } from "react";
import { createProperty } from "../services/api";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddPropertyModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    project_name: "Kanha Estate",
    plot_number: "",
    plot_size: "",
    facing: "",
    price: "",
    plc: "",
    status: "Available",
    description: "",
    image: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (
      !form.plot_number ||
      !form.plot_size ||
      !form.price
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      await createProperty({
        ...form,
        price: Number(form.price),
        plc: Number(form.plc || 0),
      });

      alert("Property added successfully.");

      setForm({
        project_name: "Kanha Estate",
        plot_number: "",
        plot_size: "",
        facing: "",
        price: "",
        plc: "",
        status: "Available",
        description: "",
        image: "",
      });

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to add property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Add Property
        </h2>

        <div className="space-y-4">

          <input
            name="plot_number"
            placeholder="Plot Number"
            value={form.plot_number}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="plot_size"
            placeholder="Plot Size"
            value={form.plot_size}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="facing"
            placeholder="Facing"
            value={form.facing}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="plc"
            type="number"
            placeholder="PLC"
            value={form.plc}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option>Available</option>
            <option>Reserved</option>
            <option>Sold</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-xl px-4 py-3"
          />

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
            {loading ? "Saving..." : "Save Property"}
          </button>

        </div>

      </div>

    </div>
  );
}