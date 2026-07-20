interface StatsCardsProps {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
}

function StatsCards({
  total,
  pending,
  confirmed,
  completed,
}: StatsCardsProps) {
  return (
    <div className="stats-container">

      <div className="stat-card">
        <h2>{total}</h2>
        <p>Total Bookings</p>
      </div>

      <div className="stat-card pending-card">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

      <div className="stat-card confirmed-card">
        <h2>{confirmed}</h2>
        <p>Confirmed</p>
      </div>

      <div className="stat-card completed-card">
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

    </div>
  );
}

export default StatsCards;