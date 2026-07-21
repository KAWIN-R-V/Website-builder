const BASE_URL = "http://localhost:5000/api/booking";

function getAuthHeaders() {

  const token = localStorage.getItem("adminToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

}

// Get all bookings
export async function getBookings() {
  const response = await fetch(BASE_URL, {
  headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return response.json();
}

// Create booking
export async function createBooking(data: any) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create booking");
  }

  return response.json();
}

// Update booking status
export async function updateBooking(id: string, status: string) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update booking");
  }

  return response.json();
}

// Delete booking
export async function deleteBooking(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`, {
  method: "DELETE",
  headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete booking");
  }

  return response.json();
}