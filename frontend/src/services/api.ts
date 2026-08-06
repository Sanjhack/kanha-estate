const API_BASE_URL = "https://kanha-estate.onrender.com/api";

/* ===========================================
   ENQUIRIES API
=========================================== */

export async function getAllEnquiries() {
  const response = await fetch(`${API_BASE_URL}/enquiries`);

  if (!response.ok) {
    throw new Error("Failed to fetch enquiries");
  }

  return response.json();
}

export async function getEnquiryById(id: number) {
  const response = await fetch(`${API_BASE_URL}/enquiries/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch enquiry");
  }

  return response.json();
}

export async function createEnquiry(data: {
  name: string;
  phone: string;
  email: string;
  plot: string;
  message: string;
}) {
  const response = await fetch(`${API_BASE_URL}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create enquiry");
  }

  return response.json();
}

export async function updateEnquiry(
  id: number,
  data: {
    name: string;
    phone: string;
    email: string;
    plot: string;
    message: string;
    status: string;
  }
) {
  const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update enquiry");
  }

  return response.json();
}

export async function deleteEnquiry(id: number) {
  const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete enquiry");
  }

  return response.json();
}

/* ===========================================
   PROPERTIES API
=========================================== */

export async function getAllProperties() {
  const response = await fetch(`${API_BASE_URL}/properties`);

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return response.json();
}

export async function getPropertyById(id: number) {
  const response = await fetch(`${API_BASE_URL}/properties/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch property");
  }

  return response.json();
}

export async function createProperty(data: {
  project_name: string;
  plot_number: string;
  plot_size: string;
  facing: string;
  price: number;
  plc: number;
  status: string;
  description: string;
  image: string;
}) {
  const response = await fetch(`${API_BASE_URL}/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create property");
  }

  return response.json();
}

export async function updateProperty(
  id: number,
  data: {
    project_name: string;
    plot_number: string;
    plot_size: string;
    facing: string;
    price: number;
    plc: number;
    status: string;
    description: string;
    image: string;
  }
) {
  const response = await fetch(`${API_BASE_URL}/properties/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update property");
  }

  return response.json();
}

export async function deleteProperty(id: number) {
  const response = await fetch(`${API_BASE_URL}/properties/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete property");
  }

  return response.json();
}

// ===================================
// SITE VISITS API
// ===================================

export async function getAllSiteVisits() {
  const response = await fetch(`${API_BASE_URL}/site-visits`);

  if (!response.ok) {
    throw new Error("Failed to fetch site visits");
  }

  return response.json();
}

export async function getSiteVisitById(id: number) {
  const response = await fetch(`${API_BASE_URL}/site-visits/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch site visit");
  }

  return response.json();
}

export async function createSiteVisit(data: {
  lead_id: number;
  property_id: number;
  visit_date: string;
  visit_time: string;
  sales_person: string;
  status: string;
  remarks: string;
}) {
  const response = await fetch(`${API_BASE_URL}/site-visits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create site visit");
  }

  return response.json();
}

export async function updateSiteVisit(
  id: number,
  data: {
    lead_id: number;
    property_id: number;
    visit_date: string;
    visit_time: string;
    sales_person: string;
    status: string;
    remarks: string;
  }
) {
  const response = await fetch(`${API_BASE_URL}/site-visits/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update site visit");
  }

  return response.json();
}

export async function deleteSiteVisit(id: number) {
  const response = await fetch(`${API_BASE_URL}/site-visits/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete site visit");
  }

  return response.json();
}
// ===================================
// FOLLOW UPS API
// ===================================

export async function getAllFollowUps() {
  const response = await fetch(`${API_BASE_URL}/follow-ups`);

  if (!response.ok) {
    throw new Error("Failed to fetch follow ups");
  }

  return response.json();
}

export async function getFollowUpById(id: number) {
  const response = await fetch(`${API_BASE_URL}/follow-ups/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch follow up");
  }

  return response.json();
}

export async function createFollowUp(data: {
  lead_id: number;
  followup_date: string;
  followup_time: string;
  followup_type: string;
  priority: string;
  status: string;
  sales_person: string;
  notes: string;
}) {
  const response = await fetch(`${API_BASE_URL}/follow-ups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create follow up");
  }

  return response.json();
}

export async function updateFollowUp(
  id: number,
  data: {
    lead_id: number;
    followup_date: string;
    followup_time: string;
    followup_type: string;
    priority: string;
    status: string;
    sales_person: string;
    notes: string;
  }
) {
  const response = await fetch(`${API_BASE_URL}/follow-ups/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update follow up");
  }

  return response.json();
}

export async function deleteFollowUp(id: number) {
  const response = await fetch(`${API_BASE_URL}/follow-ups/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete follow up");
  }

  return response.json();
}
// ===================================
// REPORTS API
// ===================================

export async function getReportSummary() {

  const response = await fetch(
    `${API_BASE_URL}/reports/summary`
  );

  if (!response.ok) {

    throw new Error(
      "Failed to fetch report summary"
    );

  }

  return response.json();

}
// ===================================
// DASHBOARD API
// ===================================

export async function getDashboardStats() {

  const response = await fetch(
    `${API_BASE_URL}/dashboard/stats`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard statistics");
  }

  return response.json();
}