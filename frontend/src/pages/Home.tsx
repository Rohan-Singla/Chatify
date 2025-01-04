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

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle room joining logic here
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
            <button
              type="submit"
              className="w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Join Room
            </button>
          </form>
        </motion.div>
        <RoomList />
      </main>
      <Footer />
    </div>
  )
}
