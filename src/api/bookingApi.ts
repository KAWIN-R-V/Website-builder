const BASE_URL = "http://localhost:5000/api/booking";

// ======================================
// Authorization Header
// ======================================
function getAuthHeaders() {
  const token = localStorage.getItem("adminToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// ======================================
// Get All Bookings (Admin)
// ======================================
export async function getBookings() {
  const response = await fetch(BASE_URL, {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch bookings");
  }

  return data;
}

// ======================================
// Create Booking (Customer)
// ======================================
export async function createBooking(bookingData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  slotId: string;
}) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create booking");
  }

  return data;
}

// ======================================
// Update Booking Status
// ======================================
export async function updateBooking(
  id: string,
  status: string
) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      status,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update booking");
  }

  return data;
}

// ======================================
// Delete Booking
// ======================================
export async function deleteBooking(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete booking");
  }

  return data;
}