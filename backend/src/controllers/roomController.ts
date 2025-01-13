import { Request, Response } from "express";
import User from "../models/Users";
import Room from "../models/Room";

export const saveUser = async (req: Request, res: any) => {
  const { username, room_id } = req.body;

  if (!username || !room_id) {
    return res.status(400).json({ message: "Username and Room ID are required." });
  }
  console.log(username,room_id)
  try {
    // Check if the room exists
    const existingRoom = await Room.findOne({ room_id });
    if (!existingRoom) {
      return res.status(404).json({ message: "Room ID does not exist." });
    }

    // Save the user
    const user = new User({ username, room_id });
    await user.save();

    res.status(201).json({ message: "Joined successfully.", user });
  } catch (error: any) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Room ID must be unique." });
    }
    res.status(500).json({ message: "Failed to save user." });
  }
};
