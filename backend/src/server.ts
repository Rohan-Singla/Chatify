import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/UserRoutes';
import { createServer } from 'http';
import { Server } from 'socket.io';
import roomRoutes from './routes/roomRoute';
dotenv.config();
const app = express();
app.use(express.json());
connectDB();

const server = createServer(app);
const io = new Server(server, {
  cors: {
      origin: "http://localhost:5173", // Your frontend URL
      methods: ["GET", "POST"],
      credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow cookies and credentials
  })
);


io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  // Listen for a message from the client
  socket.emit("your_socket_id", socket.id);

  socket.on("create_room", ({ roomId, roomName, username }) => {
    console.log(`Creating room: ${roomId} by ${username}`);
    socket.join(roomId); // User joins the room they created
    console.log(`${username} created and joined room ${roomId}`);
    io.to(roomId).emit("room_created", { roomId, roomName, username }); // Notify the creator
  });

  socket.on("join_room", ({ roomId, username }) => {
    console.log(roomId,username)
    socket.join(roomId); // User joins the room
    console.log(`${username} joined room ${roomId}`);
    io.to(roomId).emit("user_joined", { username, roomId }); // Notify others in the room
  });
  
  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

app.use('/api', userRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
