import { useEffect, useState } from "react";
import Header from "../components/Header";
import AddPropertyModal from "../components/AddPropertyModal";
import ViewPropertyModal from "../components/ViewPropertyModal";
import EditPropertyModal from "../components/EditPropertyModal";

import {
  getAllProperties,
  deleteProperty,
} from "../services/api";

export type Property = {
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
  created_at: string;
};

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedProperty, setSelectedProperty] =
    useState<Property | null>(null);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const response = await getAllProperties();
      setProperties(response.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Delete this property?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProperty(id);
      await loadProperties();
    } catch (err) {
      console.error(err);
      alert("Failed to delete property.");
    }
  }

  return (
    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      <AddPropertyModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={loadProperties}
      />

      <ViewPropertyModal
        open={showViewModal}
        property={selectedProperty}
        onClose={() => {
          setShowViewModal(false);
          setSelectedProperty(null);
        }}
      />

      <EditPropertyModal
        open={showEditModal}
        property={selectedProperty}
        onClose={() => {
          setShowEditModal(false);
          setSelectedProperty(null);
        }}
        onSuccess={loadProperties}
      />

      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Kanha Estate Properties
          </h1>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl"
          >
            + Add Property
          </button>

        </div>

        {loading ? (

          <div className="text-center py-10">
            Loading Properties...
          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">
                  <th className="text-left py-4">Plot</th>
                  <th className="text-left py-4">Size</th>
                  <th className="text-left py-4">Facing</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-center py-4">Actions</th>
                </tr>

              </thead>

              <tbody>

                {properties.length === 0 ? (

                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-12 text-gray-500"
                    >
                      No Properties Found
                    </td>
                  </tr>

                ) : (

                  properties.map((property) => (

                    <tr
                      key={property.id}
                      className="border-b hover:bg-slate-50"
                    >

                      <td className="py-4 font-semibold">
                        {property.plot_number}
                      </td>

                      <td>{property.plot_size}</td>

                      <td>{property.facing}</td>

                      <td>
                        ₹ {property.price.toLocaleString()}
                      </td>

                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            property.status === "Available"
                              ? "bg-green-100 text-green-700"
                              : property.status === "Reserved"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {property.status}
                        </span>

                      </td>

                      <td className="text-center space-x-3">

                        <button
                          onClick={() => {
                            setSelectedProperty(property);
                            setShowViewModal(true);
                          }}
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </button>

                        <button
                          onClick={() => {
                            setSelectedProperty(property);
                            setShowEditModal(true);
                          }}
                          className="text-emerald-600 hover:underline"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(property.id)}
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