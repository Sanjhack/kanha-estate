const API_BASE_URL = "http://localhost:5000/api";

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