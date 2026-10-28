function StatCard({ titulo, valor, icone, cor }) {
  return (
    <div className="stat-card">
      <div className={`stat-card__icon stat-card__icon--${cor}`}>{icone}</div>
      <div>
        <p className="stat-card__title">{titulo}</p>
        <strong className="stat-card__value">{valor}</strong>
      </div>
    </div>
  );
}

export default StatCard;
