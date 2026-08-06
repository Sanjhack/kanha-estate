import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebsiteApp from "./WebsiteApp";
import CRMApp from "./CRMApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteApp />} />
        <Route path="/crm" element={<CRMApp />} />
      </Routes>
    </BrowserRouter>
  );
}