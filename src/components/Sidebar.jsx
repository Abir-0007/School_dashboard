import React from 'react';
import './Sidebar.css';
import logo from '../assets/Logo.png'; // Ensure this is the correct image file
import overviewIcon from '../assets/home 1.png';
import communityIcon from '../assets/community 1.png';
import userIcon from '../assets/group (4) 1.png';
import paymentIcon from '../assets/price-tag.png';
import reportsIcon from '../assets/bar-chart.png';
import settingsIcon from '../assets/Settings.png';
import helpIcon from '../assets/help-web-button (1) 1.png';
import logoutIcon from '../assets/logout.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Edu-Board Logo" className="logo" />
        <div className="logo-text">
          <h1>Edu-Board</h1>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </div>

      <ul className="sidebar-links">
        <li className="active">
          <div className="nav-item">
            <img src={overviewIcon} alt="Overview" className="icon" />
            <span className="link-text">Overview</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={communityIcon} alt="Communities" className="icon" />
            <span className="link-text">Manage Communities</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={userIcon} alt="User Management" className="icon" />
            <span className="link-text">User Management</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={paymentIcon} alt="Payment" className="icon" />
            <span className="link-text">Payment Management</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={reportsIcon} alt="Reports" className="icon" />
            <span className="link-text">Reports & Analytics</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={settingsIcon} alt="Settings" className="icon" />
            <span className="link-text">Settings</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={helpIcon} alt="Help" className="icon" />
            <span className="link-text">Help</span>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <img src={logoutIcon} alt="Logout" className="icon" />
            <span className="link-text">Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
