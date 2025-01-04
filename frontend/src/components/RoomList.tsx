import { motion } from 'framer-motion'

const rooms = [
  { id: 'general', name: 'General' },
  { id: 'tech', name: 'Technology' },
  { id: 'random', name: 'Random' },
  { id: 'music', name: 'Music' },
]

export default function RoomList() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-[40%] bg-zinc-900 p-4 h-full"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-300">Available Rooms</h3>
      <ul className="space-y-2">
        {rooms.map((room) => (
          <li key={room.id} className="p-2 bg-zinc-800 rounded shadow hover:bg-gray-600 transition-colors cursor-pointer">
            {room.name}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

