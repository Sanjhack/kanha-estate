// ===================================
// Imports
// ===================================

import { useEffect, useState } from "react";
import Header from "../components/Header";

import AddSiteVisitModal from "../components/AddSiteVisitModal";
import ViewSiteVisitModal from "../components/ViewSiteVisitModal";
import EditSiteVisitModal from "../components/EditSiteVisitModal";

import {
  getAllSiteVisits,
  deleteSiteVisit,
} from "../services/api";

// ===================================
// Types
// ===================================

export type SiteVisit = {
  id: number;

  lead_id: number;
  property_id: number;

  customer_name?: string;
  phone?: string;

  plot_number?: string;
  project_name?: string;

  visit_date: string;
  visit_time: string;

  sales_person: string;

  status: string;

  remarks: string;

  created_at: string;
};

// ===================================
// Component
// ===================================

export default function SiteVisits() {

  // ===================================
  // State
  // ===================================

  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedVisit, setSelectedVisit] =
    useState<SiteVisit | null>(null);

  // ===================================
  // Effects
  // ===================================

  useEffect(() => {
    loadSiteVisits();
  }, []);

  // ===================================
  // API Functions
  // ===================================

  async function loadSiteVisits() {

    try {

      const response = await getAllSiteVisits();

      setVisits(response.data || []);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  async function handleDelete(id: number) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this site visit?"
    );

    if (!confirmDelete) return;

    try {

      await deleteSiteVisit(id);

      await loadSiteVisits();

    } catch (err) {

      console.error(err);

      alert("Failed to delete site visit.");

    }

  }

  // ===================================
  // Filter Logic
  // ===================================

  const filteredVisits = visits.filter((visit) => {

    const query = search.toLowerCase();

    const matchesSearch =

      (visit.customer_name || "")
        .toLowerCase()
        .includes(query)

      ||

      (visit.plot_number || "")
        .toLowerCase()
        .includes(query)

      ||

      (visit.sales_person || "")
        .toLowerCase()
        .includes(query)

      ||

      visit.status
        .toLowerCase()
        .includes(query);

    const matchesStatus =

      statusFilter === "All"

      ||

      visit.status === statusFilter;

    return matchesSearch && matchesStatus;

  });

  // ===================================
  // JSX
  // ===================================

  return (

    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      <AddSiteVisitModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={loadSiteVisits}
      />

      <ViewSiteVisitModal
        open={showViewModal}
        visit={selectedVisit}
        onClose={() => {
          setShowViewModal(false);
          setSelectedVisit(null);
        }}
      />

      <EditSiteVisitModal
        open={showEditModal}
        visit={selectedVisit}
        onClose={() => {
          setShowEditModal(false);
          setSelectedVisit(null);
        }}
        onSuccess={loadSiteVisits}
      />

      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Site Visits
          </h1>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl"
          >
            + Schedule Visit
          </button>

        </div>

        {/* Search & Filter */}

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="🔍 Search Site Visits..."
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

            <option value="Scheduled">
              Scheduled
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>

          </select>

        </div>
                {loading ? (

          <div className="text-center py-10">
            Loading Site Visits...
          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">Customer</th>
                  <th className="text-left py-4">Property</th>
                  <th className="text-left py-4">Visit Date</th>
                  <th className="text-left py-4">Time</th>
                  <th className="text-left py-4">Sales Person</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-center py-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredVisits.length === 0 ? (

                  <tr>

                    <td
                      colSpan={7}
                      className="text-center py-12 text-gray-500"
                    >
                      No Site Visits Found
                    </td>

                  </tr>

                ) : (

                  filteredVisits.map((visit) => (

                    <tr
                      key={visit.id}
                      className="border-b hover:bg-slate-50"
                    >

                      <td className="py-4 font-semibold">
                        {visit.customer_name || "-"}
                      </td>

                      <td>
                        {visit.plot_number || "-"}
                      </td>

                      <td>
                        {visit.visit_date}
                      </td>

                      <td>
                        {visit.visit_time}
                      </td>

                      <td>
                        {visit.sales_person}
                      </td>

                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            visit.status === "Scheduled"
                              ? "bg-blue-100 text-blue-700"
                              : visit.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {visit.status}
                        </span>

                      </td>

                      <td className="text-center space-x-3">

                        <button
                          onClick={() => {
                            setSelectedVisit(visit);
                            setShowViewModal(true);
                          }}
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </button>

                        <button
                          onClick={() => {
                            setSelectedVisit(visit);
                            setShowEditModal(true);
                          }}
                          className="text-emerald-600 hover:underline"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(visit.id)}
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