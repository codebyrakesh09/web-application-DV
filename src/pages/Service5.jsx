import React from 'react';
import '../styles/Service1.css'; // applying same style as service1
import ToolsUsed from '../components/ToolsUsed';

function Service5() {
  return (
    <div className='service1-content'>

      {/* Banner */}
      <div className="cloud-bi-container">
        <img src="/cloud-based-bi.jpg" alt="Cloud BI" className="cloud-bi-image" />
        <div className="cloud-bi-textbox">
          <h1>Corporate Training and Development</h1>
          <p>
            Our customizable training programs cater to all levels of expertise, and our ongoing training opportunities ensure your team stays up-to-date with the latest BI trends and best practices. Empower your team with the skills and knowledge they need to unlock the full potential of your data and drive business growth.
          </p>
        </div>
      </div>

      {/* What is BI Section */}
      <section className="bi-section">
        <div className="bi-text">
          <h2>What we provide?</h2>
          <p>
            Our company specializes in providing industry-leading BI corporate training services to help organizations develop the skills and knowledge they need to harness the power of data. We offer customized training programs tailored to the specific needs of your industry, covering everything from data analysis and visualization to dashboard design and business analytics. Our experienced trainers provide hands-on training that equips your team with the skills they need to extract insights from your data and make informed decisions. With our BI corporate training services, your organization can stay ahead of the curve in today's data-driven business landscape.
          </p>
        </div>
        <div className="bi-image">
          <img src="/CT3.avif" alt="What is BI Diagram" />
        </div>
      </section>

      {/* How we work Section */}
      <section className="bi-section">
        
        <div className="bi-text">
          
          <h2>How we work</h2>
          <div className="bi-image">
            <img src="/Ct1.avif" alt="How We Work Diagram" />
          </div>
          <p>
            Our BI corporate training services work by first understanding the specific needs and goals of your organization. We then customize a training program tailored to your team's expertise level and the specific tools and technologies used in your industry. Our experienced trainers provide hands-on training that focuses on practical application, equipping your team with the skills and knowledge they need to analyze, interpret, and communicate complex data effectively. We also provide ongoing training opportunities to ensure your team stays up-to-date with the latest BI trends and best practices. With our BI corporate training services, you can empower your team to unlock the full potential of your data and drive business growth.
          </p>
        </div>
      </section>

      {/* toolsused component created seperately */}
      <ToolsUsed />
      
    </div>
  );
}

export default Service5;
