export default function GameCard({ nome, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <div>
        <button className="btn small" onClick={onEdit}>Editar</button>
        <button className="btn small danger" onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
}
