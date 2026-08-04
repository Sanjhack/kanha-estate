import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./crm/Dashboard";
import Leads from "./crm/Leads";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex">
      <Sidebar page={page} setPage={setPage} />

      {page === "dashboard" && <Dashboard />}

      {page === "leads" && <Leads />}
    </div>
  );
}