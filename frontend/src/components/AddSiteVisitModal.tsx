import { useEffect, useState } from "react";
import { createSiteVisit } from "../services/api";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type Lead = {
  id: number;
  name: string;
  phone: string;
};

type Property = {
  id: number;
  project_name: string;
  plot_number: string;
};

export default function AddSiteVisitModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);

  const [formData, setFormData] = useState({
    lead_id: "",
    property_id: "",
    visit_date: "",
    visit_time: "",
    sales_person: "Sanjay",
    status: "Scheduled",
    remarks: "",
  });

  useEffect(() => {
    if (open) {
      loadDropdowns();
    }
  }, [open]);

  async function loadDropdowns() {
    try {
      setLoading(true);

      const [leadRes, propertyRes] = await Promise.all([
        fetch("http://localhost:5000/api/enquiries/dropdown"),
        fetch("http://localhost:5000/api/properties/dropdown"),
      ]);

      const leadJson = await leadRes.json();
      const propertyJson = await propertyRes.json();

      setLeads(leadJson.data || []);
      setProperties(propertyJson.data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load dropdown data.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createSiteVisit({
        lead_id: Number(formData.lead_id),
        property_id: Number(formData.property_id),
        visit_date: formData.visit_date,
        visit_time: formData.visit_time,
        sales_person: formData.sales_person,
        status: formData.status,
        remarks: formData.remarks,
      });

      onSuccess();
      onClose();

      setFormData({
        lead_id: "",
        property_id: "",
        visit_date: "",
        visit_time: "",
        sales_person: "Sanjay",
        status: "Scheduled",
        remarks: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to schedule visit.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">

    <h2 className="text-2xl font-bold mb-6">
      Schedule Site Visit
    </h2>

    {loading ? (

      <div className="py-16 text-center text-gray-500">
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

        {/* Property */}

        <select
          required
          value={formData.property_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              property_id: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        >

          <option value="">
            Select Property
          </option>

          {properties.map((property) => (

            <option
              key={property.id}
              value={property.id}
            >
              {property.plot_number} | {property.project_name}
            </option>

          ))}

        </select>

        {/* Visit Date */}

        <input
          type="date"
          required
          value={formData.visit_date}
          onChange={(e) =>
            setFormData({
              ...formData,
              visit_date: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        {/* Visit Time */}

        <input
          type="time"
          required
          value={formData.visit_time}
          onChange={(e) =>
            setFormData({
              ...formData,
              visit_time: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

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
          <option>Scheduled</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        {/* Remarks */}

        <textarea
          rows={4}
          placeholder="Remarks"
          value={formData.remarks}
          onChange={(e) =>
            setFormData({
              ...formData,
              remarks: e.target.value,
            })
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        <div className="flex justify-end gap-3 pt-4">

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-xl border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >
            Schedule Visit
          </button>

        </div>

      </form>

    )}

  </div>

</div>

  );
}