import React from "react";
import './Power_BI.css';
import { useNavigate } from "react-router-dom";

function Marketing() {

  const navigate = useNavigate(); // use for back button

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

        <div className="header">
          <div>
            <h1 className="job-title">Marketing Associate</h1>
            <p className="location">Nagpur, Maharashtra, India</p>
            <p className="job-type">Full Time</p>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>

        <h2 className="section-title">Requirements</h2>

        <div className="requirements-box">
          <div className="responsibilities">
            <ul>
                <li>Experience in campaign analytics (Email, Direct Mail, Digital)</li>
                <li>Borrower, customer, or marketing strategy analytics experience in the BFSI sector</li>
                <li>Hands-on experience with BI tools, SQL, and SAS</li>
                <li>Client-facing role requiring strong communication skills</li>
                <li>Ability to independently drive projects and lead teams of 1-3 analysts (for Team Lead level)</li>
                <li>Able to work in a fast-paced and continuously evolving environment</li>
            </ul>
          </div>
        </div>
        <div className="job-footer">
                <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Marketing;