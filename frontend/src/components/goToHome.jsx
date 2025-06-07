import { useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <header className="sticky top-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
            Pulse Poll
          </h1>
          
          <nav className="hidden md:flex space-x-6">
            <button className="hover:text-purple-300 transition-colors">Home</button>
            <button onClick={() => navigate('/trending')} className="hover:text-purple-300 transition-colors">
              Trending Polls
            </button>
            <button onClick={() => navigate('/my-polls')} className="hover:text-purple-300 transition-colors">
              My Polls
            </button>
            <button onClick={() => navigate('/completed')} className="hover:text-purple-300 transition-colors">
              Completed Polls
            </button>
          </nav>
          
          <button onClick={() => navigate('/profile')} className="p-2 rounded-full hover:bg-purple-800 transition-colors">
            <FiUser className="text-xl" />
          </button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Welcome to Pulse Poll</h2>
        <p className="mb-8">This is the home page. Other pages are accessible via the navigation.</p>
        
        <button 
          onClick={() => alert('This would show poll components in the real app')}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
        >
          View Sample Polls
        </button>
      </main>
    </div>
  );
};

export default HomePage;