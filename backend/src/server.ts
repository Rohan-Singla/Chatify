import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/UserRoutes';
import { createServer } from 'http';
import { Server } from 'socket.io';
import roomRoutes from './routes/RoomRoute';
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
  
  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

app.use('/api', userRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
