import StatusBadge from "./StatusBadge";

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

interface BookingTableProps {
  bookings: Booking[];
  onView: (booking: Booking) => void;
}

function BookingTable({
  bookings,
  onView,
}: BookingTableProps) {
  return (
    <div className="table-wrapper">

      <table>

        <thead>

          <tr>

            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {bookings.length === 0 ? (

            <tr>

              <td
                className="no-data"
                colSpan={5}
              >
                No Bookings Found
              </td>

            </tr>

          ) : (

            bookings.map((booking) => (

              <tr key={booking._id}>

                <td>{booking.name}</td>

                <td>{booking.service}</td>

                <td>
                  {new Date(
                    booking.meetingDate
                  ).toLocaleDateString()}
                </td>

                <td>

                  <StatusBadge
                    status={booking.status}
                  />

                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() =>
                      onView(booking)
                    }
                  >
                    View
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

export default BookingTable;