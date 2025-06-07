import { motion } from 'framer-motion';

const NavButton = ({ onClick, icon, text }) => (
    <motion.button
        whileHover={{ y: -2 }}
        onClick={onClick}
        className="px-4 py-2 rounded-lg flex items-center text-gray-300 hover:text-white transition-colors hover:bg-gray-800/50"
    >
        {icon}
        {text}
    </motion.button>
);

export default NavButton