import '../styles/About.css'

import EthicsVisionMission from '../components/EthicsVisionMission';
import ContactUs from '../components/ContactUs';

function About() {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <img src="/aboutus-banner.jpg" alt="Cloud BI" className="about-banner-image" />
        <div className="about-banner-text">
          <h1>About Us</h1>
          <p>
            Unlock the Power of Data and Transform Your Business with Our Business Intelligence Solutions!
          </p>
        </div>
      </div>

      <EthicsVisionMission />

      <div className="our-story-container">
        <h2 className="our-story-title">Our Story</h2>
        <div className="underline"></div>
        
        <p>
          Starting a business is never easy, but with hard work and determination, anything is possible.
          Our journey has been challenging at times, but we are proud of what we have accomplished and
          excited for what the future holds. With our business plan in place, we started to build our team.
          We looked for individuals who were not only skilled in BI and IT consulting, but who also shared
          our passion for helping businesses succeed. Our team is made up of diverse individuals who bring
          unique perspectives and skillsets to the table.
        </p>

        <p>
          The first step we took was to do our market research. We wanted to understand the challenges that
          businesses were facing and how our services could help them overcome those challenges. This research
          helped us to identify our target market and tailor our services to meet their needs. Once we had a
          clear understanding of our market, we started to develop our business plan. We looked at the costs
          involved in starting the business, as well as the potential revenue streams. We also created a
          marketing plan to help us reach our target audience and attract new clients.
        </p>

        <p>
          Dataventics is an organization that provides data-driven solutions to help businesses make informed
          decisions. We specialize in collecting, storing, and analyzing large amounts of data from various
          sources, such as sales figures, market trends, customer behavior, and financial records. Using
          advanced analytics and visualization tools, our company provides valuable insights and trends that
          allow businesses to identify areas for improvement, uncover new opportunities, and stay ahead of the
          competition.
        </p>

        <p>
          Today, our BI and IT consulting service start-up is thriving. We have a team of dedicated
          professionals who are passionate about helping businesses succeed. We have built strong relationships
          with our clients and are proud to be a trusted partner in their success.
        </p>

        <p>
          Ultimately, the goal of our company is to help businesses unlock the value of their data, enabling
          them to make informed decisions, improve their operations, and achieve their goals.
        </p>
      </div>
      
      <ContactUs />


    </div>
  );
}

export default About;