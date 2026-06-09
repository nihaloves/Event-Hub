import Event from "../models/event.js";

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      category,
      maxParticipants,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      location,
      category,
      maxParticipants,
      organizer: req.user._id,
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};