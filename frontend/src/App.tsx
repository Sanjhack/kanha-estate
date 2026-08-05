import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./crm/Dashboard";
import Leads from "./crm/Leads";
import Properties from "./crm/Properties";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex">

      <Sidebar page={page} setPage={setPage} />

      {page === "dashboard" && <Dashboard />}

      {page === "leads" && <Leads />}

      {page === "properties" && <Properties />}

    </div>
  );
}