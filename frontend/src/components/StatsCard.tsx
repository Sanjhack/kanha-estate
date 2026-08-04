import { LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="text-5xl font-bold text-slate-800 mt-3">
            {value}
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            {subtitle}
          </p>
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <Icon size={28} className={iconColor} />
        </div>
      </div>
    </div>
  );
}