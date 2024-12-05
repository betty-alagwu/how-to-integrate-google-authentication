import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/login';
import Home from './components/home';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to="/home" /> : <Login setUser={setUser} />} 
          />
          <Route 
            path="/home" 
            element={user ? <Home user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
