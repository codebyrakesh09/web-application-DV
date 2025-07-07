import React from 'react';
import '../styles/Service1.css'; // applying same style as service1
import ToolsUsed from '../components/ToolsUsed';

function Service6() {
  return (
    <div className='service1-content'>

      {/* Banner */}
      <div className="cloud-bi-container">
        <img src="/cloud-based-bi.jpg" alt="Cloud BI" className="cloud-bi-image" />
        <div className="cloud-bi-textbox">
          <h1>Application Development</h1>
          <p>
            Our Cloud-based BI services provide a secure and scalable solution for managing and analyzing large volumes of data. With powerful analytics, reporting, and collaboration features, our services enable businesses to make faster and more informed decisions, from anywhere and on any device.
          </p>
        </div>
      </div>

      {/* What is BI Section */}
      <section className="bi-section">
        <div className="bi-text">
          <h2>What is provide?</h2>
          <p>
            The application development process involves several stages, including requirements gathering, planning and design, development, testing and quality assurance, and deployment and maintenance. Our team works closely with clients to understand their needs and goals, and we use the latest tools and technologies to build high-quality, user-friendly applications. We also provide ongoing support and maintenance services to ensure that the application runs smoothly and stays up-to-date with the latest technology trends.
          </p>
        </div>
        <div className="bi-image">
          <img src="/Ap1_edited.avif" alt="What is BI Diagram" />
        </div>
      </section>

      {/* How we work Section */}
      <section className="bi-section">
        <div className="bi-image">
          <img src="/AP.avif" alt="How We Work Diagram" />
        </div>
        <div className="bi-text">
          <h2>How we work</h2>
          <ul>
            <li>
              <strong>Requirements Gathering:</strong> Identifying the needs and goals of the client and gathering detailed requirements for the application.
            </li>
            <li>
              <strong>Planning and Design:</strong> Creating a comprehensive plan covering application architecture, user interface design, and functionality.
            </li>
            <li>
              <strong>Development:</strong> Building the application using modern tools and technologies to ensure performance and scalability.
            </li>
            <li>
              <strong>Testing and Quality Assurance:</strong> Thoroughly testing the application to ensure it meets client requirements and is free of bugs and errors.
            </li>
            <li>
              <strong>Deployment and Maintenance:</strong> Deploying the application and providing ongoing support to keep it running smoothly and updated with the latest trends.
            </li>
          </ul>
        </div>
        {/* seperate text in bottom---- */}
        <p>
          Throughout the process, our team works closely with the client to ensure that the application meets their needs and exceeds their expectations. Our goal is to deliver a high-quality, user-friendly application that helps our clients achieve their business objectives.
        </p>
      </section>

      {/* toolsused component created seperately */}
      <ToolsUsed />
      
    </div>
  );
}

export default Service6;
