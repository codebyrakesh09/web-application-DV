import '../styles/Careers.css';

// using this for view job navigator
import { useNavigate } from 'react-router-dom';

function Careers() {

  const navigate = useNavigate(); // for view job button 

  return (
    <div className="career-page">
      <h1 className="career-heading">Job Listings</h1>

      <div className="job-card">
        <div className="job-info">
          <h3 className="job-title">Power BI Developer</h3>
          <p className="job-location">Nagpur, Maharashtra, India</p>
        </div>
        {/* created a button to navigate to pages in view-job folder */}
        <button onClick={() => navigate('/view-job/Power_BI')} className="job-button">
          View Job
        </button>
      </div>

      <div className="job-card">
        <div className="job-info">
          <h3 className="job-title">Tableau Developer</h3>
          <p className="job-location">Nagpur, Maharashtra, India</p>
        </div>
        <button onClick={() => navigate('/view-job/Tableau')} className="job-button">
          View Job
        </button>
      </div>

      <div className="job-card">
        <div className="job-info">
          <h3 className="job-title">MicroStrategy Developer & Admin</h3>
          <p className="job-location">Nagpur, Maharashtra, India</p>
        </div>
        <button onClick={() => navigate('/view-job/Micro')} className="job-button">
          View Job
        </button>
      </div>

      <div className="job-card">
        <div className="job-info">
          <h3 className="job-title">SQL Developer</h3>
          <p className="job-location">Nagpur, Maharashtra, India</p>
        </div>
        <button onClick={() => navigate('/view-job/Sql')} className="job-button">
          View Job
        </button>
      </div>

      <div className="job-card">
        <div className="job-info">
          <h3 className="job-title">Marketing Associate</h3>
          <p className="job-location">Nagpur, Maharashtra, India</p>
        </div>
        <button onClick={() => navigate('/view-job/Marketing')} className="job-button">
          View Job
        </button>
      </div>

      <div className="job-card">
        <div className="job-info">
          <h3 className="job-title">HR Representative</h3>
          <p className="job-location">Nagpur, Maharashtra, India</p>
        </div>
        <button onClick={() => navigate('/view-job/HR_rep')} className="job-button">
          View Job
        </button>
      </div>
    </div>
  );
}

export default Careers;
