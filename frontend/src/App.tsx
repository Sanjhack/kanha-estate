import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import WebsiteApp from "./WebsiteApp";
import CRMApp from "./CRMApp";
import Login from "./Login";

function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn =
    localStorage.getItem("crmLoggedIn") === "true";

  return loggedIn ? (
    children
  ) : (
    <Navigate to="/crm/login" replace />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website */}

        <Route
          path="/"
          element={<WebsiteApp />}
        />

        {/* CRM Login */}

        <Route
          path="/crm/login"
          element={<Login />}
        />

        {/* Protected CRM */}

        <Route
          path="/crm"
          element={
            <ProtectedRoute>
              <CRMApp />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}