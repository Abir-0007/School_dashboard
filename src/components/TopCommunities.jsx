import './TopCommunities.css';
import radiantIcon from '../assets/radient.png';
import mightyIcon from '../assets/mighty.png';
import brightIcon from '../assets/bright.png';
// Assuming global.png is not used in TopCommunities based on the initial data

const TopCommunities = () => {
  const communities = [
    { id: 1, name: 'Radiant Horizons Institute', members: 1250, icon: radiantIcon },
    { id: 2, name: 'Mighty Arrows', members: 980, icon: mightyIcon },
    { id: 3, name: 'Bright Future Academy', members: 875, icon: brightIcon }
  ];

  // Helper function to get avatar based on name (or use the icon property)
  const getAvatar = (communityName) => {
    if (communityName.includes('Radiant')) return radiantIcon;
    if (communityName.includes('Mighty')) return mightyIcon;
    if (communityName.includes('Bright')) return brightIcon;
    return null; // Fallback or default avatar if needed
  };

  return (
    <div className="top-communities-container">
      <div className="widget-header">
        <h3>Top Communities</h3>
        <button className="see-all-button">See All</button>
      </div>

      <div className="communities-list">
        {communities.map(community => (
          <div key={community.id} className="community-item">
            <div className="community-info">
              <div className="community-avatar">
                <img src={getAvatar(community.name)} alt={community.name} className="avatar-image"/>
              </div>
              <div className="community-details">
                <h4>{community.name}</h4>
              </div>
            </div>
            <button className="view-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCommunities;
