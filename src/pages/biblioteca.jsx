import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

export default function Biblioteca() {
  const [games, setGames] = useState(() => JSON.parse(localStorage.getItem('games')) || []);
  const [nome, setNome] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
  }, [games]);

  const adicionarOuEditar = () => {
    if (nome.trim() === '') return;

    if (editIndex !== null) {
      const novos = [...games];
      novos[editIndex] = nome;
      setGames(novos);
      setEditIndex(null);
    } else {
      setGames([...games, nome]);
    }
    setNome('');
  };

  const remover = (index) => {
    const novos = games.filter((_, i) => i !== index);
    setGames(novos);
  };

  const editar = (index) => {
    setNome(games[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>Minha Biblioteca</h1>
      <input
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome do jogo"
        className="input"
      />
      <button onClick={adicionarOuEditar} className="btn">
        {editIndex !== null ? 'Salvar Edição' : 'Adicionar Jogo'}
      </button>
      <div className="game-list">
        {games.map((game, index) => (
          <GameCard key={index} nome={game} onEdit={() => editar(index)} onDelete={() => remover(index)} />
        ))}
      </div>
    </div>
  );
}
