import '../styles/Industries.css'; 

const industriesData = [
  {
    id: 'industry1',
    title: 'Pharma',
    desc: 'Provide valuable insights into sales, clinical trials, and regulatory compliance data, helping pharmaceutical companies make data-driven decisions and gain a competitive advantage in the industry.',
    icon: '/icons/pharma.avif',
  },
  {
    id: 'industry2',
    title: 'Banking',
    desc: 'BI can help banks analyze customer data, market trends, and risk factors to make informed decisions about strategy, product development, and risk management.',
    icon: '/icons/banking.avif',
  },
  {
    id: 'industry3',
    title: 'Retail',
    desc: 'Help retailers analyze customer behavior, inventory levels, and market trends to make informed decisions about merchandising, pricing, and supply chain management.',
    icon: '/icons/retail.png',
  },
  {
    id: 'industry4',
    title: 'Hospitality',
    desc: 'BI can help hospitality businesses analyze customer preferences, optimize pricing, and manage resources more efficiently to improve customer satisfaction and increase profitability',
    icon: '/icons/hospitality.png',
  },
  {
    id: 'industry5',
    title: 'Financial Services',
    desc: 'Financial services companies analyze data on market trends, customer behaviour, and risk factors to make informed decisions about investement, risk management, and product developement.',
    icon: '/icons/finance.png',
  },
  {
    id: 'industry6',
    title: 'ECommerce',
    desc: 'Help ecommerce businesses analyze customer data, optimize pricing and promotions, and improve supply chain management to enhance customer experience and increase sales.',
    icon: '/icons/e-commerce.png',
  },
];

function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-overlay">
        <div className="industries-header">
          <div className="industries-image">
            <img src="/industry-experties.gif" alt="Industries Overview" />
          </div>
          <div className="industries-text">
            <h2>Industry Expertise</h2>
            <p>
              Our company has worked in a diverse range of domains for BI and analytics, including healthcare, finance, retail, transportation, government, and more. With our deep industry knowledge and technical expertise, we are able to deliver customized solutions that drive business value for our clients. Our goal is to help our clients unlock the full potential of their data and make informed decisions that drive growth and success.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {industriesData.map((industry) => (
            <div className="industries-card" key={industry.id}>
              <div className="icon-circle">
                <img src={industry.icon} alt={industry.title} />
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.desc}</p>
              {/* <Link to={`/${industry.id}`} className="more-info">More Info</Link>  */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
