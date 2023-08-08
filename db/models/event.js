import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  bandName: {
    type: String,
    required: true,
  },
  venueName: {
    type: String,
    required: true,
  },
  //   venueAddress: {
  //     type: String,
  //     required: true,
  //   },
  time: {
    type: String,
    // required: true,
  },
  ticketsLink: {
    type: String,
    required: true,
  },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
