import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./crm/Dashboard";
import Leads from "./crm/Leads";
import Properties from "./crm/Properties";
import SiteVisits from "./crm/SiteVisits";
import FollowUps from "./crm/FollowUps";
import Reports from "./crm/Reports";
import Settings from "./crm/Settings";

export default function App() {

  const [page, setPage] = useState("dashboard");

  return (

    <div className="flex">

      {/* Sidebar */}

      <Sidebar
        page={page}
        setPage={setPage}
      />

      {/* DEBUG BADGE */}

      

      {/* Pages */}

      {page === "dashboard" && <Dashboard />}

      {page === "leads" && <Leads />}

      {page === "properties" && <Properties />}

      {page === "site-visits" && <SiteVisits />}

      {page === "follow-ups" && <FollowUps />}

      {page === "reports" && <Reports />}

      {page === "settings" && <Settings />}

    </div>

  );

}