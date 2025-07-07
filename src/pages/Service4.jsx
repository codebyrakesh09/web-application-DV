import React from 'react';
import '../styles/Service1.css'; // applying same style as service1
import ToolsUsed from '../components/ToolsUsed';

function Service4() {
  return (
    <div className='service1-content'>

      {/* Banner */}
      <div className="cloud-bi-container">
        <img src="/cloud-based-bi.jpg" alt="Cloud BI" className="cloud-bi-image" />
        <div className="cloud-bi-textbox">
          <h1>Data Management and Governance</h1>
          <p>
            Data management and governance refer to the processes, policies, and technologies used to manage and control data assets within an organization. This includes everything from collecting, storing, and organizing data, to ensuring its accuracy, security, and privacy.
          </p>
        </div>
      </div>

      {/* What is BI Section */}
      <section className="bi-section">
        <div className="bi-text">
          <h2>What is Data Management and Governance ?</h2>
          <p>
            Cloud-based BI services are a powerful way to manage and analyze large volumes of data in the cloud. These services offer a range of tools and features for reporting, analytics, and data visualization, all accessible through a web-based interface. With cloud-based BI services, businesses can access their data from anywhere, collaborate more easily with team members, and make faster and more informed decisions based on real-time insights. Plus, the scalability and flexibility of cloud-based BI services make them a cost-effective solution for businesses of all sizes.
          </p>
        </div>
        <div className="bi-image">
          <img src="/Data-Governance-Graphic-1024x1024.avif" alt="What is BI Diagram" />
        </div>
      </section>

      {/* How we work Section */}
      <section className="bi-section">
        <div className="bi-image">
          <img src="/Data-Governance-1.avif" alt="How We Work Diagram" />
        </div>
        <div className="bi-text">
          <h2>How we work</h2>
          <p>
            At our company, we provide comprehensive data management and governance services to help businesses manage their data effectively. Our team of experts works with you to establish data governance policies, manage data quality, and ensure that data is securely managed and protected. Our services help businesses to optimize their data assets, streamline operations, and improve decision-making.
          </p>
        </div>
      </section>

      {/* toolsused component created seperately */}
      <ToolsUsed />
      
    </div>
  );
}

export default Service4;
