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
  created_at: string;
};

type Props = {
  open: boolean;
  property: Property | null;
  onClose: () => void;
};

export default function ViewPropertyModal({
  open,
  property,
  onClose,
}: Props) {
  if (!open || !property) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Property Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Project</p>
            <p className="font-semibold">{property.project_name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Plot Number</p>
            <p className="font-semibold">{property.plot_number}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Plot Size</p>
            <p>{property.plot_size}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Facing</p>
            <p>{property.facing}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Price</p>
            <p>₹ {property.price.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">PLC</p>
            <p>₹ {property.plc.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {property.status}
            </span>
          </div>

        </div>

        <div className="mt-6">

          <p className="text-gray-500 text-sm mb-2">
            Description
          </p>

          <div className="bg-slate-100 rounded-xl p-4 min-h-[120px]">
            {property.description || "No Description"}
          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="bg-slate-800 text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}