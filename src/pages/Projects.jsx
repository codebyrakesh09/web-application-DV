import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects-wrapper'>

      {/* Banner Section */}
      <div className="banner">
        <img src="/projects-banner.jpg" alt="Cloud BI" className="banner-image" />
        <div className="banner-text">
          <h1>Projects</h1>
          <p>
            Discover our stunning project dashboards, showcasing data turned into actionable insights. Gain a competitive edge with our visually captivating data visualizations.
          </p>
        </div>
      </div>

      {/* Dashboards Section */}
      <div className="dashboards">
        <div className="dashboard-card">
          <h3 className="dashboard-title">Sales Performance Dashboard</h3>
          <p className="dashboard-description">
            A sales information Power BI dashboard can provide real-time insights into revenue, sales trends, customer acquisition, and other key metrics. By integrating this dashboard into your website, you can empower your sales team to make data-driven decisions and drive business growth.
          </p>
          <img src="/project-page-img/sales1.avif" alt="Sales Performance" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">eCommerce Dashboard</h3>
          <p className="dashboard-description">
            A Revenue vs Budget Power BI dashboard provides a comprehensive view of your business's financial performance by comparing actual revenue against budgeted revenue. By integrating this dashboard into your website, you can make informed decisions to stay on track with financial goals and adjust your strategy as needed.
          </p>
          <img src="/project-page-img/Rev-Vs-Budget.avif" alt="eCommerce Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Sales Conversion Dashboard</h3>
          <p className="dashboard-description">
            A Sales Conversion Power BI dashboard can help you track the number of leads generated and how many of those leads converted into sales. By integrating this dashboard into your website, you can identify areas of the sales funnel that need improvement and make data-driven decisions to improve conversion rates and drive business growth.
          </p>
          <img src="/project-page-img/Sales-conversion.avif" alt="Sales Conversion Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Retail Analytics Dashboard</h3>
          <p className="dashboard-description">
            A Global Sales Power BI dashboard provides a visual representation of sales data from around the world, allowing businesses to track and analyze sales performance by region, product, or other key metrics. By integrating this dashboard into your website, you can gain valuable insights into your global sales operations and make informed decisions to improve business performance.
          </p>
          <img src="/project-page-img/sales2.avif" alt="Retail Analytics Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Energy Management Dashboard</h3>
          <p className="dashboard-description">
            A Sales & Target Power BI dashboard provides a visual comparison between actual sales and targeted sales, enabling businesses to track their progress towards achieving their sales goals. By integrating this dashboard into your website, you can make informed decisions to stay on track with your sales targets and adjust your strategy as needed to maximize revenue.
          </p>
          <img src="/project-page-img/Quick-Stats.avif" alt="Energy Management Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Marketing Analytics Dashboard</h3>
          <p className="dashboard-description">
            A KPI Power BI dashboard provides a visual representation of your business's key performance indicators (KPIs), such as revenue growth, customer acquisition, and product performance. By integrating this dashboard into your website, you can easily monitor your KPIs and make data-driven decisions to improve business performance and achieve your goals.
          </p>
          <img src="/project-page-img/blue3.avif" alt="Marketing Analytics Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Sales Overview - Global</h3>
          <p className="dashboard-description">
            A Sales Overview - Global Power BI dashboard provides a comprehensive view of your business's global sales performance, allowing you to track sales trends, revenue growth, and customer acquisition by region or product. By integrating this dashboard into your website, you can gain valuable insights into your global sales operations and make informed decisions to improve business performance.
          </p>
          <img src="/project-page-img/sales3.avif" alt="Sales Performance" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Financial Dashboard</h3>
          <p className="dashboard-description">
            A Financial Dashboard Power BI dashboard provides a comprehensive view of your business's financial performance, including metrics such as revenue, expenses, cash flow, and profitability. By integrating this dashboard into your website, you can gain valuable insights into your financial operations and make informed decisions to improve business performance.
          </p>
          <img src="/project-page-img/blue2.avif" alt="eCommerce Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Manufacturing Dashboard</h3>
          <p className="dashboard-description">
            The Manufacturing power BI dashboard provides a comprehensive view of the production process, from raw material inventory to finished goods, enabling manufacturers to identify bottlenecks and optimize the supply chain.
          </p>
          <img src="/project-page-img/Capture_PNG.avif" alt="Sales Conversion Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Supply Chain Management Dashboard</h3>
          <p className="dashboard-description">
            The Supply Chain Management power BI dashboard offers real-time visibility into inventory levels, order fulfillment, and shipping status, enabling supply chain professionals to identify issues and improve responsiveness.
          </p>
          <img src="/project-page-img/Production.avif" alt="Retail Analytics Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Social Media Analytics Dashboard</h3>
          <p className="dashboard-description">
            The Social Media Analytics power BI dashboard provides a comprehensive view of social media performance, analyzing metrics such as engagement, reach, sentiment, and follower growth across multiple platforms.
          </p>
          <img src="/project-page-img/Performance_PNG.avif" alt="Energy Management Dashboard" className="dashboard-image" />
        </div>

        <div className="dashboard-card">
          <h3 className="dashboard-title">Education Dashboard</h3>
          <p className="dashboard-description">
            The Education Dashboard power BI dashboard provides insights into student performance, attendance, and engagement, enabling educators to identify trends and make data-driven decisions to improve learning outcomes.
          </p>
          <img src="/project-page-img/Blue.avif" alt="Marketing Analytics Dashboard" className="dashboard-image" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
