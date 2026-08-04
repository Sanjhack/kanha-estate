import { useEffect, useState } from "react";
import Header from "../components/Header";
import AddLeadModal from "../components/AddLeadModal";

import {
  getAllEnquiries,
  deleteEnquiry,
} from "../services/api";

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: string;
  created_at: string;
};

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const response = await getAllEnquiries();
      setLeads(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEnquiry(id);
      await loadLeads();
    } catch (error) {
      console.error(error);
      alert("Failed to delete lead.");
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const query = search.toLowerCase();

    const matchesSearch =
      lead.name.toLowerCase().includes(query) ||
      lead.phone.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All" ||
      lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      <AddLeadModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={loadLeads}
      />

      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Leads
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl"
          >
            + Add Lead
          </button>

        </div>

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search Leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Booked">Booked</option>
            <option value="Lost">Lost</option>
          </select>

        </div>

        {loading ? (
          <div className="text-center py-10">
            Loading...
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Name</th>
                  <th className="text-left py-4">Phone</th>
                  <th className="text-left py-4">Email</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Created</th>
                  <th className="text-center py-4">Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredLeads.map((lead) => (

                  <tr
                    key={lead.id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="py-4 font-medium">
                      {lead.name}
                    </td>

                    <td>{lead.phone}</td>

                    <td>{lead.email}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
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

                    </td>

                    <td>
                      {new Date(
                        lead.created_at
                      ).toLocaleDateString()}
                    </td>

                    <td className="text-center space-x-3">

                      <button className="text-blue-600 hover:underline">
                        View
                      </button>

                      <button className="text-emerald-600 hover:underline">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}