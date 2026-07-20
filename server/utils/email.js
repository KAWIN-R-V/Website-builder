const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendBookingConfirmation = async (booking) => {
  const mailOptions = {
    from: `"WebBuilder Team" <${process.env.EMAIL_USER}>`,
    to: booking.email,

    subject: "✅ Booking Confirmation - WebBuilder",

    html: `
      <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;border:1px solid #ddd;border-radius:10px;overflow:hidden;">

        <div style="background:#2563eb;padding:20px;text-align:center;color:white;">
          <h1>WebBuilder</h1>
          <p>Your Website Development Partner</p>
        </div>

        <div style="padding:30px;">

          <h2>Hello ${booking.name},</h2>

          <p>
            Thank you for booking a
            <strong>Discovery Call</strong>
            with WebBuilder.
          </p>

          <h3>Booking Details</h3>

          <table style="width:100%;border-collapse:collapse;">

            <tr>
              <td><strong>Service</strong></td>
              <td>${booking.service}</td>
            </tr>

            <tr>
              <td><strong>Date</strong></td>
              <td>${booking.meetingDate}</td>
            </tr>

            <tr>
              <td><strong>Time</strong></td>
              <td>${booking.meetingTime}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${booking.budget}</td>
            </tr>

          </table>

          <br>

          <p>
            Our team will review your request and contact you shortly to
            confirm your appointment.
          </p>

          <p>
            We look forward to working with you!
          </p>

        </div>

        <div style="background:#f5f5f5;padding:15px;text-align:center;font-size:14px;color:#666;">

          © 2026 WebBuilder<br>

          Thank you for choosing us.

        </div>

      </div>
    `,
  };

  await transporter.sendMail(mailOptions);

  console.log("✅ Confirmation email sent");
};

module.exports = {
  sendBookingConfirmation,
};