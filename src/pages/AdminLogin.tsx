import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../api/adminApi";

import "../styles/adminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // If already logged in, redirect to dashboard
    const token = localStorage.getItem("adminToken");

    if (token) {
      navigate("/admin", { replace: true });
      return;
    }

    // Always clear the login form
    setUsername("");
    setPassword("");
    setError("");
  }, [navigate]);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await loginAdmin(
        username.trim(),
        password
      );

      localStorage.setItem(
        "adminToken",
        data.token
      );

      // Clear form
      setUsername("");
      setPassword("");
      setError("");

      // Go to dashboard
      navigate("/admin", { replace: true });

    } catch (error: any) {

      setError(
        error.message || "Login failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="login-container">

      <form
        className="login-card"
        onSubmit={handleLogin}
        autoComplete="off"
      >

        <h1>Admin Login</h1>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <input
          type="text"
          name="admin-username"
          autoComplete="off"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          name="admin-password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;