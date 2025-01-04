import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="lg:text-4xl text-2xl font-bold mb-4">Welcome to Chatify</h2>
      <p className="text-xl">Connect with friends in real-time chat rooms.</p>
    </motion.div>
  )
}

