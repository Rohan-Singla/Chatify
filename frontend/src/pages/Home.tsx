'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RoomList from '../components/RoomList'
import Footer from '../components/Footer'

export default function Home() {
  const [username, setUsername] = useState('')
  const [roomId, setRoomId] = useState('')
  const [createroom, setroom] = useState(false);
  const [roomname, setroomname] = useState('');
  const [roomtype, setroomtype] = useState('');
  
  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Joining room', roomId, 'as', username)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Header />
      <main className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow p-8 max-w-3xl mx-auto w-full"
        >
          <Hero />
          {createroom === true && <form onSubmit={handleJoinRoom} className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <input
              type="text"
              placeholder="Room Name"
              value={roomname}
              onChange={(e) => setroomname(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <select
              value={roomtype}
              onChange={(e) => setroomtype(e.target.value)}
              className="w-full cursor-pointer p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 mb-4"
            >
              <option value="">Select Room Type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            <div className="flex items-center space-y-4 p-2 rounded-lg shadow-lg flex-col mx-auto">
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-lg text-white rounded-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Create Room
              </button>
              <div className="text-center">
                <p className="text-white text-xl">OR</p>
                <a
                  onClick={() => setroom(false)}
                  className="inline-block cursor-pointer text-lg mt-5 text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors"
                >
                  Join a Room
                </a>
              </div>
            </div>
          </form>
          }
          {createroom == false &&
            <form onSubmit={handleJoinRoom} className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
              <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
              <div className="flex items-center space-y-4 p-2 rounded-lg shadow-lg flex-col mx-auto">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-lg text-white rounded-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Join Room
                </button>
                <div className="text-center">
                  <p className="text-white text-xl">OR</p>
                  <a
                    onClick={() => setroom(true)}
                    className="inline-block cursor-pointer text-lg mt-5 text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors"
                  >
                    Create Your Own Chat Room
                  </a>
                </div>
              </div>
            </form>
          }

        </motion.div>
        <RoomList />
      </main>
      <Footer />
    </div>
  )
}
