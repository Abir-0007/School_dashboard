import './Topbar.css';
import bellIcon from '../assets/bell-icon.png';
import profileImg from '../assets/Ryan.png';
import createIcon from '../assets/create.png';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="greeting">
        <h2>Good Morning, Ryan</h2>
        <p>Here is your daily preview</p>
      </div>

      <div className="topbar-right">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for communities, Users and more..."
          />
          <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <g clip-path="url(#clip0_9_734)">
    <path d="M6.4395 13.3735C7.8696 13.3735 9.2588 12.8964 10.387 12.0176L14.6436 16.2741C14.9615 16.5812 15.4682 16.5724 15.7753 16.2544C16.0749 15.9442 16.0749 15.4525 15.7753 15.1424L11.5188 10.8858C13.6994 8.07881 13.1916 4.03555 10.3846 1.85494C7.57756 -0.32566 3.53433 0.182128 1.35372 2.98915C-0.826884 5.79618 -0.319097 9.83945 2.48793 12.0201C3.61801 12.898 5.00846 13.3742 6.4395 13.3735ZM3.01943 3.51819C4.9083 1.62929 7.97076 1.62925 9.85967 3.51812C11.7486 5.40699 11.7486 8.46946 9.85974 10.3584C7.97087 12.2473 4.90841 12.2473 3.0195 10.3584C3.01947 10.3584 3.01947 10.3584 3.01943 10.3584C1.13056 8.48326 1.11943 5.43196 2.99454 3.54309C3.00282 3.53477 3.01111 3.52648 3.01943 3.51819Z" fill="#1E293B"/>
  </g>
  <defs>
    <clipPath id="clip0_9_734">
      <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
          </button>
        </div>

        <div className="notification-icon">
          <img src={bellIcon} alt="Notifications" />
          <span className="notification-badge">5</span>
        </div>

        <button className="create-button">
          <img src={createIcon} alt="Create" className="create-icon" />
          Create Community
        </button>

        <div className="profile-section">
          <img src={profileImg} alt="Ryan Ramole" className="profile-image" />
          <div className="profile-details">
            <h3>Ryan Ramole</h3>
            <p>Super Admin</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
