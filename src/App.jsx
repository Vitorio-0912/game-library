import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Biblioteca from './pages/Biblioteca';
import './styles/styles.css';

function App() {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/biblioteca" element={isAuthenticated ? <Biblioteca /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
