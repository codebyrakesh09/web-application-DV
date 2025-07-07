import '../styles/ContactUs.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="contact-content">
          <div className="contact-text">
            <p className="consultation">⬤ Secure a consultation</p>
            <h2>
              Ready to unlock the full potential of your business with our <span>BI services?</span>
              <br /> Contact us now to get started!
            </h2>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <textarea placeholder="Type your message here..." rows="5" required></textarea>
              <button type="submit">Submit</button>
            </form>

            {/* <div className="contact-details">
              <div><FaEnvelope /> info@dataventics.com</div>
              <div><FaPhoneAlt /> +91-9325545392</div>
              <div><FaMapMarkerAlt /> 2B8, 2nd floor, New Nandanvan, Nagpur, MH - 440024</div>
            </div> */}

            <div className="contact-info">
              <div className="info-column">
                <i className="fas fa-envelope"><FaEnvelope /></i> {/* double font, react-icons + font-awesome*/}
                <p>info@dataventics.com</p>
              </div>
              <div className="info-column">
                <i className="fas fa-phone-alt"><FaPhoneAlt /></i>
                <p>+91-9325545392</p>
              </div>
              <div className="info-column">
                <i className="fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
                <p>
                  288, 2nd Floor, New Nandanvan,<br />
                  Nagpur, MH - 440024
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
