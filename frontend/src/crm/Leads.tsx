import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

import Header from "../components/Header";
import AddLeadModal from "../components/AddLeadModal";
import EditLeadModal from "../components/EditLeadModal";
import ViewLeadModal from "../components/ViewLeadModal";

import {
  getAllEnquiries,
  deleteEnquiry,
} from "../services/api";

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

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  const [showAddModal, setShowAddModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showViewModal, setShowViewModal] =
    useState(false);

  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      setLoading(true);

      const response = await getAllEnquiries();

      setLeads(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEnquiry(id);
      await loadLeads();
    } catch (error) {
      console.error(error);
      alert("Failed to delete lead.");
    }
  }

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
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={loadLeads}
      />

      <EditLeadModal
        open={showEditModal}
        lead={selectedLead}
        onClose={() => {
          setShowEditModal(false);
          setSelectedLead(null);
        }}
        onSuccess={loadLeads}
      />

      <ViewLeadModal
        open={showViewModal}
        lead={selectedLead}
        onClose={() => {
          setShowViewModal(false);
          setSelectedLead(null);
        }}
      />

      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="flex items-center justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Leads
          </h1>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl"
          >
            <Plus size={18} />
            Add Lead
          </button>

        </div>

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search Leads..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border rounded-xl px-4 py-3"
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">
              Contacted
            </option>
            <option value="Booked">
              Booked
            </option>
            <option value="Lost">
              Lost
            </option>
          </select>

        </div>
                {loading ? (
          <div className="py-12 text-center text-gray-500 text-lg">
            Loading Leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="py-12 text-center text-gray-500 text-lg">
            No Leads Found
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left px-5 py-4">
                    Name
                  </th>

                  <th className="text-left px-5 py-4">
                    Phone
                  </th>

                  <th className="text-left px-5 py-4">
                    Email
                  </th>

                  <th className="text-left px-5 py-4">
                    Status
                  </th>

                  <th className="text-left px-5 py-4">
                    Created
                  </th>

                  <th className="text-center px-5 py-4">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredLeads.map((lead) => (

                  <tr
                    key={lead.id}
                    className="border-t hover:bg-slate-50 transition"
                  >

                    <td className="px-5 py-4 font-semibold">
                      {lead.name}
                    </td>

                    <td className="px-5 py-4">
                      {lead.phone}
                    </td>

                    <td className="px-5 py-4">
                      {lead.email || "-"}
                    </td>

                    <td className="px-5 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
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

                    <td className="px-5 py-4">
                      {new Date(
                        lead.created_at
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4">

                      <div className="flex justify-center gap-3">

                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setShowViewModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800 transition"
                          title="View Lead"
                        >
                          <Eye size={19} />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setShowEditModal(true);
                          }}
                          className="text-emerald-600 hover:text-emerald-800 transition"
                          title="Edit Lead"
                        >
                          <Pencil size={19} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(lead.id)
                          }
                          className="text-red-600 hover:text-red-800 transition"
                          title="Delete Lead"
                        >
                          <Trash2 size={19} />
                        </button>

                      </div>

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