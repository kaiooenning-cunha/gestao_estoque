import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import CategoryChart from "./components/CategoryChart";
import ProductTable from "./components/ProductTable";
import { products, LIMITE_ESTOQUE_BAIXO } from "./data/products";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("dashboard");

  const total = products.length;
  const baixo = products.filter((p) => p.quantidade <= LIMITE_ESTOQUE_BAIXO).length;
  const emEstoque = total - baixo;

  const indicadores = [
    { titulo: "Total de Produtos", valor: total, icone: "📦", cor: "azul" },
    { titulo: "Produtos em Estoque", valor: emEstoque, icone: "📦", cor: "verde" },
    { titulo: "Estoque Baixo", valor: baixo, icone: "⚠️", cor: "vermelho" },
  ];

  return (
    <div className="layout">
      <Header usuario="Ana Souza" />
      <Sidebar ativo={pagina} onSelect={setPagina} />
      <main className="main">
        <h2 className="main__title">Dashboard</h2>
        <p className="main__subtitle">Visão geral do estoque da empresa.</p>

        <div className="stats">
          {indicadores.map((i) => (
            <StatCard key={i.titulo} {...i} />
          ))}
        </div>

        <div className="grid">
          <CategoryChart produtos={products} />
          <ProductTable produtos={products} />
        </div>
      </main>
    </div>
  );
}

export default App;
