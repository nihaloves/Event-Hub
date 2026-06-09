import Registration from "../models/Registration.js";

export const registerForEvent = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { eventId } = req.body;

    const existing = await Registration.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (existing) {
      return res.status(400).json({
        message: "Already registered",
      });
    }

    const registration = await Registration.create({
      user: req.user._id,
      event: eventId,
    });

    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({
      user: req.user._id,
    }).populate("event");

    res.json(registrations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const cancelRegistration = async (req, res) => {
  try {
    const registration = await Registration.findOneAndDelete({
      _id: req.params.registrationId,
      user: req.user._id,
    });

    if (!registration) {
      return res.status(404).json({
        message: "Registration not found",
      });
    }

    res.json({
      message: "Registration cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};