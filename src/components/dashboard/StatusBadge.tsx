interface StatusBadgeProps {
  status: string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const currentStatus = status || "Pending";

  return (
    <span
      className={`status-badge ${currentStatus.toLowerCase()}`}
    >
      {currentStatus}
    </span>
  );
}

export default StatusBadge;