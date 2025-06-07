import { useNavigate } from 'react-router-dom';

const TrendingPolls = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Trending Polls</h1>
      <p className="mb-4">This would display trending polls.</p>
      <button 
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default TrendingPolls;