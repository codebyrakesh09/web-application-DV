import { Link } from 'react-router-dom';
import '../styles/Services.css';

const servicesData = [
  {
    id: 'service1',
    title: 'Cloud-based BI Solutions',
    desc: 'Enable businesses to access and analyze their data from anywhere, anytime, and make informed decisions quickly and effectively.',
    icon: '/icons/cloud-based.avif',
  },
  {
    id: 'service2',
    title: 'Data Analysis and Visualization',
    desc: 'Provide businesses with actionable insights and intuitive visualizations to help them make informed decisions and drive growth.',
    icon: '/icons/data-analysis.avif',
  },
  {
    id: 'service3',
    title: 'Data Integration and Warehousing',
    desc: 'Help businesses to streamline their data management processes, improve data quality and accessibility, and gain valuable insights to enhance their overall performance.',
    icon: '/icons/data-integration.avif',
  },
  {
    id: 'service4',
    title: 'Data Management and Governance',
    desc: 'Help businesses to ensure data accuracy, compliance, and security, and optimize their data assets for maximum efficiency and value.',
    icon: '/icons/data-management.avif',
  },
  {
    id: 'service5',
    title: 'Corporate Training and Development',
    desc: 'Businesses to enhance the skills and performance of their employees, improve organizational efficiency, and drive business growth.',
    icon: '/icons/cop-training.avif',
  },
  {
    id: 'service6',
    title: 'Application Development',
    desc: 'Provide customized and scalable software solutions that enable businesses to optimize their processes, enhance customer experiences, and achieve their digital transformation goals.',
    icon: '/icons/app-development.avif',
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-overlay">
        <div className="services-header">
          <div className="services-text">
            <h2>Our Services</h2>
            <p>
             Dataventics offers a range of services aimed at helping organizations to make better decisions based on data. These services may include data warehousing, data mining, reporting and analytics, dashboard development, and consulting services.
            </p>
          </div>
          <div className="services-image">
            <img src="/services-theam.gif" alt="Services Overview" />
          </div>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon-circle">
                {/* edited for images */}
                <img src={service.icon} alt={service.title} />
              </div> {/* Replace with icons/images */}
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`/${service.id}`} className="more-info">More Info</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
