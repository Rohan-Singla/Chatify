import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 text-gray-100 p-4"
    >
      <div className="container mx-auto flex-wrap lg:flex justify-between md:gap-0 gap-4">
        <h1 className="text-2xl font-bold">Chatify</h1>
        <a href='https://github.com/Rohan-Singla/Chatify' target='_blank' className="text-lg font-bold">Feel Free to Drop a ⭐ at Github</a>
      </div>
    </motion.header>
  )
}

