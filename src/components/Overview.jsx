

import communitiesIcon from '../assets/Communities.png';
import directorsIcon from '../assets/community.png';
import pendingIcon from '../assets/Pend_app.png';
import studentsIcon from '../assets/total_student.png';

import React, { useState } from 'react';
import './Overview.css';

const Overview = () => {
  const [activeView, setActiveView] = useState('Monthly');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="overview-wrapper">
      <div className="overview-header">
        <h2>Overview</h2>
        <div className="view-toggle">
          {['Weekly', 'Monthly', 'Yearly'].map((view) => (
            <button
              key={view}
              className={`toggle-button ${activeView === view ? 'active' : ''}`}
              onClick={() => handleViewChange(view)}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      <div className="overview-container">
        <div className="overview-left">
          <div className="card payments">
            <h2>Payments Processed</h2>
            <p className="amount">$125,500</p>
            <div className="change positive">+6.2% | $24,233 Increased</div>
            <button className="details-button">See Details</button>
          </div>
        </div>

        <div className="overview-right">
          <div className="mini-card">
            <div className="mini-card-content">
              <h4>Total Communities</h4>
              <p>25</p>
              <span className="change negative">-1.5% Decreased</span>
            </div>
            <div className="mini-card-icon communities">
              <img src={communitiesIcon} alt="Communities" />
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-card-content">
              <h4>Active Community Directors</h4>
              <p>18</p>
              <span className="change negative">-1.25% Decreased</span>
            </div>
             <div className="mini-card-icon directors">
               <img src={directorsIcon} alt="Directors" />
            </div>
          </div>
          <div className="mini-card">
             <div className="mini-card-content">
              <h4>Pending Applications</h4>
              <p>12</p>
              <span className="change positive">-3.25% Decreased</span>
            </div>
             <div className="mini-card-icon pending">
                <img src={pendingIcon} alt="Pending Applications" />
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-card-content">
              <h4>Total Students Enrolled</h4>
              <p>3,250</p>
              <span className="change positive">+3.25% Increased</span>
            </div>
            <div className="mini-card-icon students">
               <img src={studentsIcon} alt="Students Enrolled" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;