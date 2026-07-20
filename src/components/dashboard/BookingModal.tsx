import { useEffect, useState } from "react";

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

interface BookingModalProps {
  booking: Booking | null;
  onClose: () => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, status: string) => void;
}

function BookingModal({
  booking,
  onClose,
  onDelete,
  onUpdate,
}: BookingModalProps) {
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (booking) {
      setStatus(booking.status || "Pending");
    }
  }, [booking]);

  if (!booking) return null;

  return (
    <div className="modal-overlay">
      <div className="booking-modal">
        <div className="modal-header">
          <h2>Booking Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-content">
          <div className="info-group">
            <label>Name</label>
            <p>{booking.name}</p>
          </div>

          <div className="info-group">
            <label>Email</label>
            <p>{booking.email}</p>
          </div>

          <div className="info-group">
            <label>Phone</label>
            <p>{booking.phone}</p>
          </div>

          <div className="info-group">
            <label>Company</label>
            <p>{booking.company}</p>
          </div>

          <div className="info-group">
            <label>Service</label>
            <p>{booking.service}</p>
          </div>

          <div className="info-group">
            <label>Budget</label>
            <p>{booking.budget}</p>
          </div>

          <div className="info-group">
            <label>Meeting Date</label>
            <p>{booking.meetingDate}</p>
          </div>

          <div className="info-group">
            <label>Meeting Time</label>
            <p>{booking.meetingTime}</p>
          </div>

          <div className="info-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="Pending">
                Pending
              </option>

              <option value="Confirmed">
                Confirmed
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          <div className="info-group message-box">
            <label>Project Description</label>

            <p>{booking.message}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button
        className="update-btn"
        onClick={() => {
            console.log("Update button clicked");
            console.log("Booking ID:", booking._id);
            console.log("New Status:", status);

            onUpdate(booking._id, status);
        }} >
        Update Status
        </button>   

          <button
            className="delete-btn"
            onClick={() =>
              onDelete(booking._id)
            }
          >
            Delete Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;