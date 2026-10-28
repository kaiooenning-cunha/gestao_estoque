import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { LIMITE_ESTOQUE_BAIXO } from "../data/products";

function ProductTable({ produtos }) {
  const [busca, setBusca] = useState("");

  const filtrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="panel">
      <div className="panel__head">
        <h2>Produtos em estoque</h2>
        <input
          type="search"
          className="search"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((p) => {
            const baixo = p.quantidade <= LIMITE_ESTOQUE_BAIXO;
            return (
              <tr key={p.id} className={baixo ? "row--baixo" : ""}>
                <td>
                  <span className="table__icon">{p.icone}</span>
                  {p.nome}
                </td>
                <td>{p.categoria}</td>
                <td>{p.quantidade}</td>
                <td>
                  <StatusBadge baixo={baixo} />
                </td>
              </tr>
            );
          })}
          {filtrados.length === 0 && (
            <tr>
              <td colSpan="4" className="table__empty">
                Nenhum produto encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default ProductTable;
