const CORES = ["#4f83ff", "#8b6cf6", "#ff8a95", "#3ecf8e"];

function CategoryChart({ produtos }) {
  const contagem = produtos.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + 1;
    return acc;
  }, {});
  const categorias = Object.entries(contagem);
  const max = Math.max(...categorias.map(([, qtd]) => qtd), 1);

  return (
    <section className="panel">
      <div className="panel__head">
        <h2>Quantidade de produtos por categoria</h2>
      </div>
      <div className="chart">
        {categorias.map(([nome, qtd], i) => (
          <div className="chart__col" key={nome}>
            <span>{qtd}</span>
            <div
              className="chart__bar"
              style={{ height: `${(qtd / max) * 100}%`, background: CORES[i % CORES.length] }}
            />
            <small>{nome}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryChart;
