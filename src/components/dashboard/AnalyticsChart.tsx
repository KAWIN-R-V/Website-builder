import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Booking {
  meetingDate: string;
}

interface AnalyticsChartProps {
  bookings: Booking[];
}

function AnalyticsChart({
  bookings,
}: AnalyticsChartProps) {

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = months.map((month, index) => {

    const total = bookings.filter((booking) => {

      const bookingMonth =
        new Date(
          booking.meetingDate
        ).getMonth();

      return bookingMonth === index;

    }).length;

    return {
      month,
      bookings: total,
    };

  });

  return (

    <div className="chart-card">

      <h2>Monthly Bookings</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="bookings"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default AnalyticsChart;