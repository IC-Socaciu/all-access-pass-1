import dbConnect from "../../../db/connect";
import Event from "../../../db/models/event";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const events = await Event.find();
    response.status(200).json(events);
  } else if (request.method === "POST") {
    const newEvent = new Event(request.body);
    await newEvent.save();

    response.status(201).json(newEvent);
  } else {
    response.status(404).json({ status: "404 Page not found" });
  }
}
