const itens = [
  { id: "dashboard", rotulo: "Dashboard", icone: "🏠" },
  { id: "produtos", rotulo: "Produtos", icone: "📦" },
  { id: "movimentacoes", rotulo: "Movimentações", icone: "⇄" },
];

function Sidebar({ ativo, onSelect }) {
  return (
    <nav className="sidebar">
      {itens.map((item) => (
        <button
          key={item.id}
          className={`sidebar__item ${ativo === item.id ? "sidebar__item--ativo" : ""}`}
          onClick={() => onSelect(item.id)}
        >
          <span>{item.icone}</span>
          {item.rotulo}
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;
