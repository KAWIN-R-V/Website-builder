const createBooking = (req, res) => {

    console.log("New Booking Received");

    console.log(req.body);

    res.status(200).json({
        success: true,
        message: "Booking created successfully!",
        booking: req.body
    });

};

module.exports = {
    createBooking
};