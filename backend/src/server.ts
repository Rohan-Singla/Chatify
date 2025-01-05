import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/UserRoutes';
import { createServer } from 'http';
import { Server } from 'socket.io';

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
  socket.on("send_message", (data) => {
      console.log(data);
      socket.emit("receive_message", data); // Broadcast message to all connected clients
  });

  // Handle disconnection
  socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
  });
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
