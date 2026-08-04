type Lead = {
  id: number;
  name: string;
  phone: string;
  status: string;
  created_at: string;
};

type Props = {
  leads: Lead[];
};

export default function LeadTable({ leads }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-6">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Name</th>
            <th className="text-left py-3">Phone</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">Created</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-slate-50">
              <td className="py-4 font-medium">{lead.name}</td>

              <td>{lead.phone}</td>

              <td>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                  {lead.status}
                </span>
              </td>

              <td>
                {new Date(lead.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}