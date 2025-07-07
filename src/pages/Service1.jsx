import React from 'react';
import '../styles/Service1.css';
import ToolsUsed from '../components/ToolsUsed';

function Service1() {
  return (
    <div className='service1-content'>

      {/* Banner */}
      <div className="cloud-bi-container">
        <img src="/cloud-based-bi.jpg" alt="Cloud BI" className="cloud-bi-image" />
        <div className="cloud-bi-textbox">
          <h1>Cloud-based BI</h1>
          <p>
            Our Cloud-based BI services provide a secure and scalable solution for managing and analyzing large volumes of data.
            With powerful analytics, reporting, and collaboration features, our services enable businesses to make faster and more
            informed decisions, from anywhere and on any device.
          </p>
        </div>
      </div>

      {/* What is BI Section */}
      <section className="bi-section">
        <div className="bi-text">
          <h2>What is BI ?</h2>
          <p>
            Cloud-based BI services are a powerful way to manage and analyze large volumes of data in the cloud. These services offer a range of tools and features for reporting, analytics, and data visualization, all accessible through a web-based interface. With cloud-based BI services, businesses can access their data from anywhere, collaborate more easily with team members, and make faster and more informed decisions based on real-time insights. Plus, the scalability and flexibility of cloud-based BI services make them a cost-effective solution for businesses of all sizes.
          </p>
        </div>
        <div className="bi-image">
          <img src="/what-is-bi.avif" alt="What is BI Diagram" />
        </div>
      </section>

      {/* How we work Section */}
      <section className="bi-section">
        <div className="bi-image">
          <img src="/how-we-work.avif" alt="How We Work Diagram" />
        </div>
        <div className="bi-text">
          <h2>How we work</h2>
          <p>
            Cloud-based BI services typically work by connecting to your business data sources, such as databases, spreadsheets, and cloud applications. This data is then processed and analyzed in the cloud, using powerful algorithms and machine learning techniques. The resulting insights and reports are displayed in a user-friendly web-based interface, which can be accessed from anywhere and on any device. With Cloud-based BI services, businesses can quickly and easily analyze their data, collaborate with team members, and make better-informed decisions to drive business success.
          </p>
        </div>
      </section>

      {/* toolsused component created seperately */}
      <ToolsUsed />
      
    </div>
  );
}

export default Service1;
