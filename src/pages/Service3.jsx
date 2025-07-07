import React from 'react';
import '../styles/Service1.css'; // applying same style as service1
import ToolsUsed from '../components/ToolsUsed';

function Service3() {
  return (
    <div className='service1-content'>

      {/* Banner */}
      <div className="cloud-bi-container">
        <img src="/cloud-based-bi.jpg" alt="Cloud BI" className="cloud-bi-image" />
        <div className="cloud-bi-textbox">
          <h1>Data Analysis and Visualization</h1>
          <p>
            Data analysis and visualization services involve using advanced techniques to analyze and interpret data and present it in a meaningful and easily understandable way. These services are essential for businesses that want to gain insights from their data and make informed decisions.
          </p>
        </div>
      </div>

      {/* What is BI Section */}
      <section className="bi-section">
        <div className="bi-text">
          <h2>What is Data Analysis and Visualization?</h2>
          <p>
            At our company, we provide comprehensive data analysis and visualization services to help businesses gain insights from their data. Our team of experts uses state-of-the-art tools and technologies to analyze and interpret data, and create visually appealing reports and dashboards that are easy to understand and use. Our services help businesses to streamline their operations, improve their decision-making, and achieve their business goals. Data visualization involves using charts, graphs, and other visual tools to present data in a way that is easy to understand and analyze. This makes it easier for businesses to make informed decisions based on their data.
          </p>
        </div>
        <div className="bi-image">
          <img src="/Data-Analysis-and-Visualization.avif" alt="What is BI Diagram" />
        </div>
      </section>

      {/* How we work Section */}
      <section className="bi-section">
        <div className="bi-image">
          <img src="/PBI-Advantages.avif" alt="How We Work Diagram" />
        </div>
        {/* <div className="bi-text">
          <h2>How we work</h2>
          <p>
            Cloud-based BI services typically work by connecting to your business data sources such as databases, spreadsheets, and cloud applications...
          </p>
        </div> */}
      </section>

      {/* toolsused component created seperately */}
      <ToolsUsed />
      
    </div>
  );
}

export default Service3;
