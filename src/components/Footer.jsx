import { Link } from 'react-router-dom';
import '../styles/Footer.css';
// import Privacy from '../pages/Privacy';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <i className="fas fa-envelope"></i> {/* using fontawesome*/}
          <p>info@dataventics.com</p>
        </div>
        <div className="footer-column">
          <i className="fas fa-phone-alt"></i>
          <p>+91-9325545392</p>
        </div>
        <div className="footer-column">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            288, 2nd floor, New Nandanvan,<br />
            Nagpur, MH - 440024
          </p>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://in.linkedin.com/company/dataventics" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="footer-bottom">

        {/* policy links */}
        <div className="policy-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div className="copyright">
        © 2025 | Created By Rakesh. All rights reserved.
        </div>
        
      </div>
      
    </footer>
  );
}

export default Footer;
