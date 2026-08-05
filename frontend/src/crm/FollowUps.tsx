import { useEffect, useState } from "react";

import Header from "../components/Header";

import AddFollowUpModal from "../components/AddFollowUpModal";
import ViewFollowUpModal from "../components/ViewFollowUpModal";
import EditFollowUpModal from "../components/EditFollowUpModal";

import {
  getAllFollowUps,
  deleteFollowUp,
} from "../services/api";

export type FollowUp = {
  id: number;
  customer_name: string;
  phone: string;
  lead_id: number;

  followup_date: string;
  followup_time: string;

  followup_type: string;

  priority: string;

  status: string;

  sales_person: string;

  notes: string;

  created_at: string;
};

export default function FollowUps() {

  const [followUps, setFollowUps] = useState<FollowUp[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [showAddModal, setShowAddModal] =
    useState(false);

  const [showViewModal, setShowViewModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [selectedFollowUp, setSelectedFollowUp] =
    useState<FollowUp | null>(null);

  useEffect(() => {

    loadFollowUps();

  }, []);

  async function loadFollowUps() {

    try {

      const response = await getAllFollowUps();

      setFollowUps(response.data || []);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  async function handleDelete(id: number) {

    const confirmDelete = window.confirm(
      "Delete this follow up?"
    );

    if (!confirmDelete) return;

    try {

      await deleteFollowUp(id);

      await loadFollowUps();

    } catch (err) {

      console.error(err);

      alert("Failed to delete follow up.");

    }

  }

  const filteredFollowUps = followUps.filter((item) => {

    const q = search.toLowerCase();

    const matchesSearch =
      item.customer_name.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.sales_person.toLowerCase().includes(q);

    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus;

  });

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8">

  <Header />

  <AddFollowUpModal
    open={showAddModal}
    onClose={() => setShowAddModal(false)}
    onSuccess={loadFollowUps}
  />

  <ViewFollowUpModal
    open={showViewModal}
    followUp={selectedFollowUp}
    onClose={() => {
      setShowViewModal(false);
      setSelectedFollowUp(null);
    }}
  />

  <EditFollowUpModal
    open={showEditModal}
    followUp={selectedFollowUp}
    onClose={() => {
      setShowEditModal(false);
      setSelectedFollowUp(null);
    }}
    onSuccess={loadFollowUps}
  />

  <div className="bg-white rounded-2xl shadow-md p-6">

    {/* Header */}

    <div className="flex justify-between items-center mb-6">

      <h1 className="text-3xl font-bold">
        Follow Ups
      </h1>

      <button
        onClick={() => setShowAddModal(true)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl"
      >
        + Add Follow Up
      </button>

    </div>

    {/* Search */}

    <div className="flex gap-4 mb-6">

      <input
        type="text"
        placeholder="🔍 Search Follow Ups..."
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
        <option value="All">
          All Status
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="Completed">
          Completed
        </option>

        <option value="Missed">
          Missed
        </option>

      </select>

    </div>

    {loading ? (

      <div className="text-center py-10">
        Loading Follow Ups...
      </div>

    ) : (

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4">
                Customer
              </th>

              <th className="text-left py-4">
                Date
              </th>

              <th className="text-left py-4">
                Time
              </th>

              <th className="text-left py-4">
                Type
              </th>

              <th className="text-left py-4">
                Priority
              </th>

              <th className="text-left py-4">
                Status
              </th>

              <th className="text-center py-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredFollowUps.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="text-center py-12 text-gray-500"
                >
                  No Follow Ups Found
                </td>

              </tr>

            ) : (

              filteredFollowUps.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="py-4">

                    <div className="font-semibold">
                      {item.customer_name}
                    </div>

                    <div className="text-sm text-gray-500">
                      {item.phone}
                    </div>

                  </td>

                  <td>
                    {item.followup_date}
                  </td>

                  <td>
                    {item.followup_time}
                  </td>

                  <td>
                    {item.followup_type}
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : item.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.priority}
                    </span>

                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Missed"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="text-center space-x-3">

                    <button
                      onClick={() => {
                        setSelectedFollowUp(item);
                        setShowViewModal(true);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </button>

                    <button
                      onClick={() => {
                        setSelectedFollowUp(item);
                        setShowEditModal(true);
                      }}
                      className="text-emerald-600 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    )}

  </div>

</div>

  );
}