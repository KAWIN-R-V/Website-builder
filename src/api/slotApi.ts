const API_URL = "http://localhost:5000/api/slots";

// ======================================
// Get Available Slots (Customer)
// ======================================
export async function getAvailableSlots() {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

// ======================================
// Get All Slots (Admin)
// ======================================
export async function getAllSlots() {
  const response = await fetch(`${API_URL}/all`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

// ======================================
// Create Slot
// ======================================
export async function createSlot(
  date: string,
  time: string
) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date,
      time,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

// ======================================
// Delete Slot
// ======================================
export async function deleteSlot(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

// ======================================
// Update Slot Status
// ======================================
export async function updateSlotStatus(
  id: string,
  status: string
) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}