import { useNavigate } from 'react-router-dom';

function Home({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <div className="flex items-center space-x-4">
            {user?.picture && (
              <img 
                src={user.picture} 
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <p className="text-gray-700"><strong>Email:</strong> {user?.email}</p>
              <p className="text-gray-700"><strong>Full Name:</strong> {user?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
