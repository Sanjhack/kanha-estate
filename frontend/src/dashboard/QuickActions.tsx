import {
  Plus,
  Building2,
  CalendarDays,
  PhoneCall,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Add Lead",
      icon: Plus,
      color: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      title: "Add Property",
      icon: Building2,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Schedule Visit",
      icon: CalendarDays,
      color: "bg-amber-500 hover:bg-amber-600",
    },
    {
      title: "Call Customer",
      icon: PhoneCall,
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mt-6">

      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {actions.map((action) => (
          <button
            key={action.title}
            className={`${action.color} text-white rounded-xl p-5 transition-all duration-200 hover:scale-105`}
          >
            <action.icon
              size={28}
              className="mx-auto mb-3"
            />

            <p className="font-semibold">
              {action.title}
            </p>

          </button>
        ))}

      </div>

    </div>
  );
}