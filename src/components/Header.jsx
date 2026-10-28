function Header({ usuario }) {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">📦</span>
        <div>
          <h1 className="header__title">
            Stock<span>Pro</span>
          </h1>
          <small>Estoque</small>
        </div>
      </div>
      <div className="header__user">
        <span className="header__avatar">👤</span>
        {usuario}
      </div>
    </header>
  );
}

export default Header;
