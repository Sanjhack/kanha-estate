import { Bell, UserCircle } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Good Morning, Sanjay 👋
        </h1>

        <p className="text-gray-500 mt-2">{today}</p>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-3 rounded-xl bg-white shadow">
          <Bell size={22} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 bg-white shadow rounded-xl px-4 py-2">
          <UserCircle size={36} />
          <div>
            <p className="font-semibold">Sanjay</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}