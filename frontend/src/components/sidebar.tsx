import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  PhoneCall,
  BarChart3,
  Settings,
} from "lucide-react";

type SidebarProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Sidebar({
  page,
  setPage,
}: SidebarProps) {

  const menu = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      value: "dashboard",
    },
    {
      icon: Users,
      label: "Leads",
      value: "leads",
    },
    {
      icon: Building2,
      label: "Properties",
      value: "properties",
    },
    {
      icon: CalendarDays,
      label: "Site Visits",
      value: "site-visits",
    },
    {
      icon: PhoneCall,
      label: "Follow Ups",
      value: "follow-ups",
    },
    {
      icon: BarChart3,
      label: "Reports",
      value: "reports",
    },
    {
      icon: Settings,
      label: "Settings",
      value: "settings",
    },
  ];

  return (
    <aside className="relative w-72 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold text-emerald-400">
        Shervy Realty
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        CRM Dashboard
      </p>

      <div className="mt-10 space-y-3">

        {menu.map((item) => (

          <button
            key={item.value}
            onClick={() => setPage(item.value)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
              page === item.value
                ? "bg-emerald-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>

        ))}

      </div>

      <div className="absolute bottom-6 left-6 right-6">

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                S
              </div>

              <div>

                <p className="font-semibold">
                  Sanjay
                </p>

                <p className="text-sm text-slate-400">
                  Administrator
                </p>

              </div>

            </div>

            <span className="text-slate-500 text-xl">
              ›
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}