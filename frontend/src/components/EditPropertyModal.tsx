import { useEffect, useState } from "react";
import { updateProperty } from "../services/api";

type Property = {
  id: number;
  project_name: string;
  plot_number: string;
  plot_size: string;
  facing: string;
  price: number;
  plc: number;
  status: string;
  description: string;
  image: string;
};

type Props = {
  open: boolean;
  property: Property | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditPropertyModal({
  open,
  property,
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

  useEffect(() => {
    if (property) {
      setForm({
        project_name: property.project_name || "Kanha Estate",
        plot_number: property.plot_number || "",
        plot_size: property.plot_size || "",
        facing: property.facing || "",
        price: property.price.toString(),
        plc: property.plc.toString(),
        status: property.status || "Available",
        description: property.description || "",
        image: property.image || "",
      });
    }
  }, [property]);

  if (!open || !property) return null;

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
    try {
      setLoading(true);

      await updateProperty(property.id, {
        ...form,
        price: Number(form.price),
        plc: Number(form.plc),
      });

      alert("Property updated successfully.");

      onSuccess();
      onClose();

    } catch (err) {
      console.error(err);
      alert("Failed to update property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Edit Property
        </h2>

        <div className="space-y-4">

          <input
            name="plot_number"
            value={form.plot_number}
            onChange={handleChange}
            placeholder="Plot Number"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="plot_size"
            value={form.plot_size}
            onChange={handleChange}
            placeholder="Plot Size"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="facing"
            value={form.facing}
            onChange={handleChange}
            placeholder="Facing"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="number"
            name="plc"
            value={form.plc}
            onChange={handleChange}
            placeholder="PLC"
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
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Description"
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
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </div>
  );
}