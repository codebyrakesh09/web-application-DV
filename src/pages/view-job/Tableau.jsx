import React from "react";
import './Power_BI.css';
import { useNavigate } from "react-router-dom";

function Tableau() {

  const navigate = useNavigate(); // use for back button

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

        <div className="header">
          <div>
            <h1 className="job-title">Tableau Developer</h1>
            <p className="location">Nagpur, Maharashtra, India</p>
            <p className="job-type">Full Time</p>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>

        <h2 className="section-title">Requirements</h2>

        <div className="requirements-box">
          <div className="responsibilities">
            <h2>Tableau Developer Responsibilities</h2>
            <ul>
                <li>Working experience of 1–8 years with Tableau</li>
                <li>Experienced with Tableau’s advanced features and collaboration</li>
                <li>Experienced in gathering data requirements and understanding the dataflow from business users</li>
                <li>Experience in data modelling for reporting and proposing report designs</li>
                <li>Worked on data validation and data reconciliation</li>
                <li>Ability to re-model based on reporting requirements</li>
                <li>Ability to identify performance issues and fix them</li>
                <li>Good communication skills and ability to communicate with business and understand data requirements</li>
                <li>Ability to work independently and create visualizations for specific use cases</li>
                <li>Awareness about cloud technologies and trends</li>
                <li>Experience in Agile and JIRA work environment</li>
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

export default Tableau;