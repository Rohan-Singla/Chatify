import { motion } from 'framer-motion'
import { FaTwitter ,  FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 text-gray-300 p-5 mt-8 relative h-full bottom-0 w-full"
        >
            <div className="container mx-auto flex flex-col text-lg md:flex-row justify-between items-center">
                <p className="mb-2 md:mb-0">&copy; 2025 Chatify. All rights reserved.</p>
                <a href='https://x.com/rohanBuilds' className='lg:my-0 my-5'>
                    Created with 💖 by <b> @RohanBuilds</b>
                </a>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-gray-100 transition-colors text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-gray-100 transition-colors text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="hover:text-gray-100 transition-colors text-2xl">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </motion.footer>
    )
}

