import { useEffect, useState } from "react";

import {
  getAllSlots,
  createSlot,
  deleteSlot,
} from "../../api/slotApi";

interface Slot {
  _id: string;
  date: string;
  time: string;
  status: string;
}

function SlotManager() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Today's date (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // Current time (HH:MM)
  const currentTime = new Date()
    .toTimeString()
    .slice(0, 5);

  useEffect(() => {
    loadSlots();
  }, []);

  // ===============================
  // Load Slots
  // ===============================

  const loadSlots = async () => {
    try {
      const data = await getAllSlots();

      setSlots(data.slots);
    } catch (error) {
      console.error(error);
    }
  };

  // ===============================
  // Add Slot
  // ===============================

  const handleAddSlot = async () => {
    if (!date || !time) {
      alert("Please select both date and time.");
      return;
    }

    // Extra validation

    const selectedDateTime = new Date(`${date}T${time}:00`);

    if (selectedDateTime <= new Date()) {
      alert("Please select a future date and time.");
      return;
    }

    try {
      setLoading(true);

      await createSlot(date, time);

      alert("Slot added successfully.");

      setDate("");
      setTime("");

      await loadSlots();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // Delete Slot
  // ===============================

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Delete this slot?"
    );

    if (!confirmDelete) return;

    try {
      await deleteSlot(id);

      alert("Slot deleted successfully.");

      await loadSlots();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="slot-manager">

      <h2>Manage Appointment Slots</h2>

      <div className="slot-form">

        <input
          type="date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          min={date === today ? currentTime : undefined}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={handleAddSlot}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Slot"}
        </button>

      </div>

      <table className="slot-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {slots.length === 0 ? (

            <tr>
              <td colSpan={4}>
                No Slots Available
              </td>
            </tr>

          ) : (

            slots.map((slot) => (

              <tr key={slot._id}>

                <td>
                  {new Date(slot.date).toLocaleDateString()}
                </td>

                <td>{slot.time}</td>

                <td>{slot.status}</td>

                <td>

                  <button
                    className="delete-btn"
                    disabled={slot.status === "Booked"}
                    onClick={() =>
                      handleDelete(slot._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default SlotManager;