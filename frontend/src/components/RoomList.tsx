import { motion } from 'framer-motion'

const rooms = [
  { id: '#8374', name: 'General' },
  { id: '#8WECS', name: 'Technology' },
  { id: '#91vsa', name: 'Random' },
  { id: '#3JDSJ', name: 'Music' },
  { id: '#8374', name: 'General' },
]

export default function RoomList() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-[40%] bg-zinc-900 p-4 h-full max-h-72 overflow-y-scroll"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-300">Available  Public Rooms</h3>
      <ul className="space-y-2">
        {rooms.map((room) => (
          <li  key={room.id} className="p-2 bg-zinc-800 flex justify-between rounded shadow hover:bg-gray-600 transition-colors cursor-pointer">
            {room.name}
            <a className='cursor-pointer text-blue-400'>{room.id}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

