import './Dashboard.css';
import Overview from '../components/Overview';
import ApplicationsTable from '../components/ApplicationsTable';
import TopCommunities from '../components/TopCommunities';
import RecentPayments from '../components/RecentPayments';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Overview />
      
      <div className="dashboard-content">
        <div className="dashboard-main">
          <ApplicationsTable />
        </div>
        
        <div className="dashboard-sidebar">
          <TopCommunities />
          <RecentPayments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
