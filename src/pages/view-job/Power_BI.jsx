import React from "react";
import './Power_BI.css';
import { useNavigate } from "react-router-dom"; // importing react core component useNavigate

function Power_BI() {

  const navigate = useNavigate(); // use for back button

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

        <div className="header">
          <div>
            <h1 className="job-title">Power BI Developer</h1>
            <p className="location">Nagpur, Maharashtra, India</p>
            <p className="job-type">Full Time</p>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>

        <h2 className="section-title">Requirements</h2>

        <div className="requirements-box">
          <div className="responsibilities">
            <h2>Power BI Developer Responsibilities</h2>
            <ul>
              <li>Understand business requirements in BI context and design data models to transform raw data into meaningful insights</li>
              <li>Create dashboards and interactive visual reports using Power BI</li>
              <li>Identify key performance indicators (KPIs) with clear objectives and consistently monitor those</li>
              <li>Analyse data and present it through reports that aid decision-making</li>
              <li>Convert business requirements into technical specifications and decide timeline to accomplish</li>
              <li>Create relationships between data and develop tabular and other multidimensional data models</li>
              <li>Chart creation and data documentation explaining algorithms, parameters, models, and relations</li>
              <li>Design, develop, test, and deploy Power BI scripts and perform detailed analytics</li>
              <li>Perform DAX queries and functions in Power BI</li>
              <li>Develop data warehouse and work with SSAS, SSIS, and SSRS</li>
              <li>Redefine and make technical/strategic changes to enhance existing Business Intelligence systems</li>
              <li>Create customized charts and custom calculations as per requirements</li>
              <li>Design, develop and deploy business intelligence solutions as per needs</li>
              <li>Perform SQL querying for best results, using filters and graphs for better data understanding</li>
              <li>Collaborate with users and team members at all levels for performance improvement and suggestions</li>
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

export default Power_BI;