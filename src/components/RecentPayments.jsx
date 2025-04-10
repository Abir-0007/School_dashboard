import './RecentPayments.css';
import radiantIcon from '../assets/radient.png';
import mightyIcon from '../assets/mighty.png';
import globalIcon from '../assets/global.png';

const RecentPayments = () => {
  const payments = [
    { id: 1, name: 'Radiant Horizons Institute', amount: '$5,000' },
    { id: 2, name: 'Mighty Arrows', amount: '$5,000' },
    { id: 3, name: 'Global Scholars', amount: '$5,000' }
  ];

  // Helper function to get avatar based on name
  const getAvatar = (paymentName) => {
    if (paymentName.includes('Radiant')) return radiantIcon;
    if (paymentName.includes('Mighty')) return mightyIcon;
    if (paymentName.includes('Global')) return globalIcon;
    return null; // Fallback or default avatar if needed
  };

  return (
    <div className="recent-payments-container">
      <div className="widget-header">
        <h3>Recent Payments</h3>
        <button className="see-all-button">See All</button>
      </div>

      <div className="payments-list">
        {payments.map(payment => (
          <div key={payment.id} className="payment-item">
            <div className="payment-info">
              <div className="payment-avatar">
                <img src={getAvatar(payment.name)} alt={payment.name} className="avatar-image" />
              </div>
              <div className="payment-details">
                <h4>{payment.name}</h4>
              </div>
            </div>
            <div className="payment-amount">{payment.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPayments;
