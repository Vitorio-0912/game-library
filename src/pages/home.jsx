import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bem-vindo à Biblioteca de Jogos</h1>
      <button className="btn" onClick={() => navigate('/biblioteca')}>Ir para Biblioteca</button>
    </div>
  );
}
