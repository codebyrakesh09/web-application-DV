import React from "react";
import './Power_BI.css';
import { useNavigate } from "react-router-dom";

function HR_rep() {

  const navigate = useNavigate(); // use for back button

  return (
    <div className="page-container">
      <div className="content-wrapper">
        {/* -1 for 1 page behind... */}
        <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button> 

        <div className="header">
          <div>
            <h1 className="job-title">HR Representative</h1>
            <p className="location">Nagpur, Maharashtra, India</p>
            <p className="job-type">Full Time</p>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>

        <h2 className="section-title">Requirements</h2>

        <div className="requirements-box">
          <div className="responsibilities">
            <ul>
                <li>Drive end-to-end ownership of HR analytics agenda and projects covering PEC processes</li>
                <li>Continuously identify and recommend best practices for applying data mining to increase efficiency and effectiveness of the HR function</li>
                <li>Apply statistical and predictive modeling techniques using multiple data sources to generate insights and measure the effectiveness of people programs</li>
                <li>Develop dashboards for key HR impact areas such as attrition, performance, talent, and recruiting analytics</li>
                <li>Understand people data and performance metrics; work with PEC HR Operations to ensure Core HRMS data is reliable, valid, and consistently maintained</li>
                <li>Lead delivery of monthly and quarterly reports required by executive leadership and BU people leaders</li>
                <li>Partner with internal HR tech team to design solutions for data collection, analysis, and presentation</li>
                <li>Build automated reporting solutions for GILAC with consistent integration across all HRIS systems and tools</li>
                <li>Support GILAC leadership (GMC, HR Heads) by identifying people-related challenges and leveraging data analysis to influence operational changes</li>
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

export default HR_rep;

