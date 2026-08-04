import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "Leads" },
    { icon: Building2, label: "Properties" },
    { icon: BarChart3, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-emerald-400">
        Shervy Realty
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        CRM Dashboard
      </p>

      <div className="mt-10 space-y-3">
        {menu.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}