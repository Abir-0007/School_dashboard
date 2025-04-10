import './Overview.css';
import arrowUp from '../../assets/up-arrow.svg';

const SummaryCard = () => {
  return (
    <div className="summary-card">
      <p>Payments Processed</p>
      <h1>$125,500</h1>
      <div className="summary-change">
        <img src={arrowUp} alt="up" />
        <span className="green">+6.2%</span>
        <span>| $24,233 Increased</span>
      </div>
      <button className="see-details">See Details</button>
    </div>
  );
};

export default SummaryCard;
