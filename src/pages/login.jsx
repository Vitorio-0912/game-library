import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/home');
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={handleLogin} className="btn">Entrar</button>
    </div>
  );
}
