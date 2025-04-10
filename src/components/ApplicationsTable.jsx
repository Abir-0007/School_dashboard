import './ApplicationsTable.css';
import searchIcon from '../assets/Search2.png';
import deleteIcon from '../assets/Delete.png';

// Specific Community Logos
import brightIcon from '../assets/bright.png';
import globalIcon from '../assets/global.png';
import mightyIcon from '../assets/mighty.png'; // For Mighty Arrows if added
import radiantIcon from '../assets/radient.png'; // For Radiant Horizons if added

// Fallback/Random Community Logos
import community1Icon from '../assets/community 1.png';
import groupIcon from '../assets/group (4) 1.png';
import communitiesIcon from '../assets/Communities.png';

const randomIcons = [community1Icon, groupIcon, communitiesIcon];

const ApplicationsTable = () => {
  const applications = [
    { id: 1, community: 'Bright Future', school: 'Oakridge School', date: '02-04-25', students: 420 },
    { id: 2, community: 'Global Scholars', school: 'Green Valley High', date: '01-04-25', students: 540 },
    { id: 3, community: 'International Academy of Scholars', school: 'Pinecrest Academy', date: '31-03-25', students: 540 },
    { id: 4, community: 'Bright Future', school: 'Bright Future Academy', date: '02-04-25', students: 420 },
    { id: 5, community: 'Global Scholars', school: 'Pinecrest Academy', date: '01-04-25', students: 540 },
    { id: 6, community: 'International Academy of Scholars', school: 'Oakridge School', date: '31-03-25', students: 540 },
    { id: 7, community: 'Bright Future', school: 'Pinecrest Academy', date: '02-04-25', students: 420 },
  ];

  // Helper function to get the correct community logo
  const getCommunityLogo = (communityName) => {
    if (communityName.includes('Bright Future')) return brightIcon;
    if (communityName.includes('Global Scholars')) return globalIcon;
    if (communityName.includes('Mighty Arrows')) return mightyIcon;
    if (communityName.includes('Radiant Horizons')) return radiantIcon;
    // For others, pick a random one from the fallback list
    const randomIndex = Math.floor(Math.random() * randomIcons.length);
    return randomIcons[randomIndex];
  };

  return (
    <div className="applications-table-container">
      <div className="table-header">
        <div className="table-title">
          <h3>New Applications</h3>
          <div className="growth-tag positive">
            <span>+3.25% Increased</span>
          </div>
        </div>
        
        <div className="table-actions">
          <div className="search-container">
            <input type="text" placeholder="Search for communities, Users and more..." className="search-input" />
            <button className="search-button">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
          
          <button className="sort-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H17M3 12H13M3 17H9M19 17V7M19 17L22 14M19 17L16 14M19 7L22 10M19 7L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sort
          </button>
          
          <button className="filter-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5H21M3 12H21M3 19.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Filter
          </button>

          <button className="delete-button">
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
      
      <table className="applications-table">
        <thead>
          <tr>
            <th className="checkbox-col">
              <input type="checkbox" className="round-checkbox" />
            </th>
            <th>Community Name</th>
            <th>School</th>
            <th>Date</th>
            <th>Total Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>
                <input type="checkbox" className="round-checkbox" />
              </td>
              <td>
                <div className="community-cell">
                  <div className="community-logo">
                    <img src={getCommunityLogo(app.community)} alt={app.community} className="community-logo-image" />
                  </div>
                  <span>{app.community}</span>
                </div>
              </td>
              <td>
                <div className="school-cell">
                  <div className="school-icon">🏫</div> 
                  <span>{app.school}</span>
                </div>
              </td>
              <td>{app.date}</td>
              <td>{app.students}</td>
              <td>
                <button className="approve-button">Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="table-footer">
        <button className="see-all-button">See Full List</button>
      </div>
    </div>
  );
};

export default ApplicationsTable;
