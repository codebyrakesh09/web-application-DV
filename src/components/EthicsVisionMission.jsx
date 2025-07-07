import '../styles/EthicsVisionMission.css';

function EthicsVisionMission() {
  return (
    <section className="ethics-section">
      <div className="ethics-container">
        <div className="ethics-box">
          <img src="/mission.png" alt="Mission Icon" className="ethics-icon" />
          <h3 className="ethics-title mission">Our Mission</h3>
          <p className="ethics-text">
            To empower businesses with data-driven insights and expert solutions
            that drive growth, innovation, and success.
          </p>
        </div>

        <div className="ethics-box">
          <img src="/vision.png" alt="Vision Icon" className="ethics-icon" />
          <h3 className="ethics-title vision">Our Vision</h3>
          <p className="ethics-text">
            To be the leading provider of innovative and comprehensive data
            analytics solutions that empower businesses to achieve their full potential.
          </p>
        </div>

        <div className="ethics-box">
          <img src="/ethics.png" alt="Ethics Icon" className="ethics-icon" />
          <h3 className="ethics-title ethics">Our Ethics</h3>
          <p className="ethics-text">
            Integrity and accountability guide everything we do. We prioritize
            our clients' privacy and security while delivering innovative and
            ethical data analytics solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EthicsVisionMission;
