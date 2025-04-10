import './Overview.css';
import communitiesIcon from '../assets/Communities.png';
import directorsIcon from '../assets/community.png';
import pendingIcon from '../assets/Pend_app.png';
import studentsIcon from '../assets/total_student.png';

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="overview-header">
        <h2>Overview</h2>
        <div className="time-filters">
          <button className="time-filter active">Weekly</button>
          <button className="time-filter">Monthly</button>
          <button className="time-filter">Yearly</button>
        </div>
      </div>

      <div className="stats-container">
        {/* Payments Processed Card - Full Width Row */}
        <div className="payment-card">
          <div className="payment-content">
            <p className="stat-label">Payments Processed</p>
            <h1 className="stat-value">$125,500</h1>
            <div className="payment-status">
              <div className="status-tag positive">
                <span className="status-icon">▲</span>
                <span className="status-value">+6.2%</span>
                <span className="status-divider">|</span>
                <span className="status-text">$24,233 Increased</span>
              </div>
              <button className="details-button">See Details</button>
            </div>
          </div>
        </div>

        <div className="stats-grid-4-col">
          {/* First Row: Total Communities and Active Community Directors */}
          <div className="stat-card total-communities">
            <div className="stat-body">
              <div className="stat-text">
                <p className="stat-label">Total Communities</p>
                <h2 className="stat-value">25</h2>
                <div className="stat-trend negative">
                  <span className="trend-arrow">▼</span>
                  <span className="trend-value">-1.5% Decreased</span>
                </div>
              </div>
              <div className="icon-container">
                <div className="stat-icon blue-bg">
                  <img src={communitiesIcon} alt="Total Communities" />
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card active-directors">
            <div className="stat-body">
              <div className="stat-text">
                <p className="stat-label">Active Community Directors</p>
                <h2 className="stat-value">18</h2>
                <div className="stat-trend negative">
                  <span className="trend-arrow">▼</span>
                  <span className="trend-value">-1.25% Decreased</span>
                </div>
              </div>
              <div className="icon-container">
                <div className="stat-icon blue-bg">
                  <img src={directorsIcon} alt="Active Community Directors" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Pending Applications and Total Students Enrolled */}
          <div className="stat-card pending-applications">
            <div className="stat-body">
              <div className="stat-text">
                <p className="stat-label">Pending Applications</p>
                <h2 className="stat-value">12</h2>
                <div className="stat-trend negative">
                  <span className="trend-arrow">▼</span>
                  <span className="trend-value">-3.25% Decreased</span>
                </div>
              </div>
              <div className="icon-container">
                <div className="stat-icon blue-bg">
                  <img src={pendingIcon} alt="Pending Applications" />
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card total-students">
            <div className="stat-body">
              <div className="stat-text">
                <p className="stat-label">Total Students Enrolled</p>
                <h2 className="stat-value">3,250</h2>
                <div className="stat-trend positive">
                  <span className="trend-arrow">▲</span>
                  <span className="trend-value">+3.25% Increased</span>
                </div>
              </div>
              <div className="icon-container">
                <div className="stat-icon green-bg">
                  <img src={studentsIcon} alt="Total Students Enrolled" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, change, changeType, iconBg }) => {
  const iconClass = `stat-icon ${iconBg === 'green' ? 'green-bg' : 'blue-bg'}`;
  const trendClass = `stat-trend ${changeType}`;

  return (
    <div className="stat-card">
      <div className="stat-content">
        <div>
          <p className="stat-label">{label}</p>
          <h2 className="stat-value">{value}</h2>
          <div className={trendClass}>
            <span className="trend-arrow">{changeType === 'positive' ? '▲' : '▼'}</span>
            <span className="trend-value">{change} {changeType === 'positive' ? 'Increased' : 'Decreased'}</span>
          </div>
        </div>
        <div className={iconClass}>
          <img src={icon} alt={label} />
        </div>
      </div>
    </div>
  );
};

export default Overview;

