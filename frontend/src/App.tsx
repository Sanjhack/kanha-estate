import Sidebar from "./components/Sidebar";
import Dashboard from "./crm/Dashboard";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}