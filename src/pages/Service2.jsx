import React from 'react';
import '../styles/Service1.css'; // applying same style as service1
import ToolsUsed from '../components/ToolsUsed';

function Service2() {
  return (
    <div className='service1-content'>

      {/* Banner */}
      <div className="cloud-bi-container">
        <img src="/cloud-based-bi.jpg" alt="Cloud BI" className="cloud-bi-image" />
        <div className="cloud-bi-textbox">
          <h1>Data Integration and Warehousing</h1>
          <p>
            Data integration and warehousing services involve combining data from different sources to create a unified view of the business and storing, managing, and analyzing it in a centralized repository. These services enable businesses to gain valuable insights from their data and make informed decisions. Our company provides end-to-end data integration and warehousing services using the latest tools and technologies to ensure that your data is stored securely and can be easily accessed for analysis, reporting, and decision-making.
          </p>
        </div>
      </div>

      {/* What is BI Section */}
      <section className="bi-section">
        <div className="bi-text">
          <h2>What is Data Integration and Warehousing ?</h2>
          <p>
            Data integration and warehousing services are essential tools for managing and analyzing large volumes of data. Data integration involves combining data from various sources to create a unified view of the business, while data warehousing involves storing, managing, and analyzing data in a centralized repository. These services enable businesses to gain insights from their data and make informed decisions. At our company, we provide end-to-end data integration and warehousing services using cutting-edge tools and technologies to ensure that your data is secure and easily accessible for analysis, reporting, and decision-making.
          </p>
        </div>
        <div className="bi-image">
          <img src="/data-ware-inti.gif" alt="What is BI Diagram" />
        </div>
      </section>

      {/* How we work Section */}
      <section className="bi-section">
        <div className="bi-image">
          <img src="/How-bi-works2-data-ware-inti.avif" alt="How We Work Diagram" />
        </div>
        <div className="bi-text">
          <h2>How we work</h2>
          <p>
            Data integration and warehousing services work by first identifying and collecting data from various sources such as databases, files, and applications. Once collected, the data is cleaned, transformed, and integrated into a unified format to create a complete view of the business. This process ensures that data is consistent and accurate, making it suitable for analysis. Our team of experts has extensive experience in data integration and warehousing and can help you achieve your data management goals.
          </p>
        </div>
      </section>

      {/* toolsused component created seperately */}
      <ToolsUsed />
      
    </div>
  );
}

export default Service2;
