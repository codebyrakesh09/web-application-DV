import React from 'react';
import '../styles/ToolsUsed.css';

function ToolsUsed() {
  return (
    <div className="tools-used-container">
      <div className="tools-grid">
        <img src="/tools/power-bi.avif" alt="Power BI" />
        <img src="/tools/tableau.avif" alt="Tableau" />
        <img src="/tools/MSTR.avif" alt="MicroStrategy" />
        <img src="/tools/MSP-Apps.avif" alt="Microsoft PowerApps" />
        <img src="/tools/Power-Automate.avif" alt="Power Automate" />
        <img src="/tools/informatica-ar21.avif" alt="Informatica" />
        <img src="/tools/SQL.avif" alt="SQL Server" />
      </div>
    </div>
  );
}

export default ToolsUsed;
