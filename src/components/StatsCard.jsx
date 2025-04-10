import './StatsCard.css';

const StatsCard = ({ title, value, trend }) => {
  return (
    <div className="stats-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{trend}</p>
    </div>
  );
};

export default StatsCard;
