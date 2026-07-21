const BASE_URL = "http://localhost:5000/api/admin";

// ===============================
// Admin Login
// ===============================
export async function loginAdmin(
  username: string,
  password: string
) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}