import React from "react";
import './Power_BI.css';
import { useNavigate } from "react-router-dom";

function Micro() {

  const navigate = useNavigate(); // use for back button

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

        <div className="header">
          <div>
            <h1 className="job-title">MicroStrategy Developer & Admin</h1>
            <p className="location">Nagpur, Maharashtra, India</p>
            <p className="job-type">Full Time</p>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>

        <h2 className="section-title">Requirements</h2>

        <div className="requirements-box">
          <div>
            <h3 className="subsection-title">1. For Developer:</h3>
            <p className="description">
              Support business intelligence solution architecture, design, development,
              implementation, and administration for clients across a complex data
              landscape. Act as a team member for the development of technical and functional
              requirements leveraging multiple artifacts and documentation throughout an
              iterative, Agile development lifecycle. Leverage strong conceptual and
              technical knowledge of MicroStrategy VA/UX architecture, software components,
              design, development, and integration best practices to develop impactful BI
              solutions. Participate in requirements gathering discussions and collect the
              appropriate level of detail required to be turned towards immediate technical
              results to solve client problems. Monitor throughout the project delivery life
              cycle in order to manage the scope, schedule, and cost for IT projects.
              Provide conceptual and technical knowledge/thought leadership of MicroStrategy
              VA/UX architecture, software components, design, development, and integration
              best practices across components workstream.
            </p>
          </div>

          <div>
            <h3 className="subsection-title">2. For Admin:</h3>
            <p className="description">
              Install, upgrade, configure, deploy, automate, monitor, and optimize the
              performance of a MicroStrategy application. Experience in onboarding new
              projects and maintaining existing ones. This includes admin task like:
              User creation, ACL, Movement of objects etc. Basic Experience in creating and
              Modifying report and documents using MicroStrategy web. Proper understanding
              of its internal architecture. Admin tools: Enterprise Manager, Object Manager,
              Scan MD, Integrity Manager, Enterprise Manager, System Manager. Good knowledge
              of MSTR Authentication mechanism: Windows, LDAP, SSO Experience in creating,
              modifying EM data warehouse and troubleshooting data load related issues
              Troubleshoot/Issue Resolution with MicroStrategy software on both the server
              and customers web client. Ability to perform all MSTR admin activities in
              Linux OS. Maintenance of MicroStrategy Environments in Linux OS.
            </p>
          </div>
        </div>

        <div className="job-footer">
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Micro;