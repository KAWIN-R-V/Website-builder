import { useEffect, useMemo, useState } from "react";

import "../styles/admin.css";

import StatsCards from "../components/dashboard/StatsCards";
import SearchBar from "../components/dashboard/SearchBar";
import BookingTable from "../components/dashboard/BookingTable";
import BookingModal from "../components/dashboard/BookingModal";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import SlotManager from "../components/dashboard/SlotManager";

import {
  getBookings,
  deleteBooking,
  updateBooking,
} from "../api/bookingApi";

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  meetingDate: string;
  meetingTime: string;
  message: string;
  status: string;
}

function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedBooking, setSelectedBooking] =
    useState<Booking | null>(null);

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    try {
      setLoading(true);

      const data = await getBookings();

      setBookings(data.bookings);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBooking(id);

      await loadBookings();

      setSelectedBooking(null);

      alert("Booking deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete booking.");
    }
  };

  const handleUpdate = async (
    id: string,
    status: string
  ) => {
    try {
      await updateBooking(id, status);

      await loadBookings();

      setSelectedBooking(null);

      alert("Status updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update booking.");
    }
  };

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) =>
      booking.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [bookings, search]);

  const pending = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const confirmed = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  if (loading) {
    return (
      <div className="admin-loading">
        Loading Bookings...
      </div>
    );
  }

  return (
    <div className="admin-container">

      <h1>Admin Dashboard</h1>

      <StatsCards
        total={bookings.length}
        pending={pending}
        confirmed={confirmed}
        completed={completed}
      />

      <AnalyticsChart bookings={bookings} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <BookingTable
        bookings={filteredBookings}
        onView={setSelectedBooking}
      />

      <BookingModal
        booking={selectedBooking}
        onClose={() => setSelectedBooking(null)}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />

      <hr className="dashboard-divider" />

      <SlotManager />

    </div>
  );
}

export default Admin;