import { useEffect, useState } from "react";

type Property = {
  id: number;
  plot_number: string;
  facing: string;
  price: number;
  status: string;
};

export default function RecentProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/properties"
      );

      const data = await response.json();

      setProperties(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          Recent Properties
        </h2>

        <span className="text-sm text-gray-500">
          Latest Inventory
        </span>

      </div>

      {loading ? (

        <div className="text-center py-8 text-gray-500">
          Loading...
        </div>

      ) : properties.length === 0 ? (

        <div className="text-center py-8 text-gray-500">
          No properties found.
        </div>

      ) : (

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Plot
              </th>

              <th className="text-left py-3">
                Facing
              </th>

              <th className="text-left py-3">
                Price
              </th>

              <th className="text-left py-3">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {properties.slice(0, 5).map((property) => (

              <tr
                key={property.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-3 font-semibold">
                  {property.plot_number}
                </td>

                <td>
                  {property.facing}
                </td>

                <td>
                  ₹ {property.price.toLocaleString()}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
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

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}