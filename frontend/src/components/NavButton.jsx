const NavButton = ({ onClick, icon, text }) => (
    <button
        onClick={onClick}
        className="px-4 py-2 rounded-lg flex items-center text-gray-300 hover:text-white transition-colors hover:bg-blue-600 hover:scale-110">
        {icon}
        {text}
    </button>
);

export default NavButton