import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Progress from './pages/Progress';
import Records from './pages/Records';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path='/signup' element={<Signup />} />
          {authenticated ? (
            <>
              <Route path='/home' element={<Home />} />
              <Route path='/history' element={<History />} />
              <Route path='/progress' element={<Progress />} />
              <Route path='/records' element={<Records />} />
            </>
          ) : (
            <Route path='*' element={<Navigate to='/login' />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

