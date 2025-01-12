import { Request, Response } from "express";
import Room from "../models/Room";
import crypto from "crypto"; // Built-in module for generating unique IDs

export const createRoom = async (req: Request, res: any) => {
  const { username, room_name } = req.body;

  // Validate input
  if (!username || !room_name) {
    return res.status(400).json({ message: "Username and Room Name are required." });
  }

  try {
    // Check if the room name already exists (optional)
    const existingRoom = await Room.findOne({ room_name });
    if (existingRoom) {
      return res.status(400).json({ message: "Room name already exists. Please choose another name." });
    }
    const generateRoomId = () => crypto.randomBytes(3).toString("hex");

    // Generate a unique room ID
    const room_id = generateRoomId();

    // Create and save the room
    const room = new Room({ username, room_name, room_id });
    await room.save();

    res.status(201).json({ message: "Room created successfully.", room });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create room." });
  }
};
