import React from "react";
import './Power_BI.css';
import { useNavigate } from "react-router-dom";

function Sql() {

  const navigate = useNavigate(); // use for back button

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

        <div className="header">
          <div>
            <h1 className="job-title">SQL Developer</h1>
            <p className="location">Nagpur, Maharashtra, India</p>
            <p className="job-type">Full Time</p>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>

        <h2 className="section-title">Requirements</h2>

        <div className="requirements-box">
          <div className="responsibilities">
            <h2>Database Developer Responsibilities</h2>
            <ul>
                <li>Designing databases and ensuring their stability, reliability, and performance</li>
                <li>Design, create, and implement database systems based on the end user's requirements</li>
                <li>Improve application performance</li>
                <li>Prepare documentation for database applications</li>
                <li>Manage memory for database systems</li>
                <li>Develop database schemas, tables, and dictionaries</li>
                <li>Ensure data quality and integrity in databases</li>
                <li>Fix issues related to database performance and provide corrective measures</li>
                <li>Create complex functions, scripts, stored procedures, and triggers to support application development</li>
                <li>Take regular database backups</li>
                <li>Test databases and perform bug fixes</li>
                <li>Provide authentication and authorizations for databases</li>
                <li>Develop best practices for database design and development activities</li>
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

export default Sql;