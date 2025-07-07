import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // logic for scrolling
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/DV blue.avif" alt="Company Logo" />
      </div>
      <ul className="menu">
        <li onClick={() => scrollToSection('home')}>Home</li> 
        {/* scrole down to home id in Home.jsx  */}
        <li className="dropdown">
          <span onClick={() => scrollToSection('services')}>Services</span>
          <div className="dropdown-content">
            <Link to="/service1">Cloud-based BI Services</Link>
            <Link to="/service2">Data Integration and Warehousing</Link>
            <Link to="/service3">Data Analysis and Visualization</Link>
            <Link to="/service4">Data Management and Governance</Link>
            <Link to="/service5">Corporate Training and Development</Link>
            <Link to="/service6">Application Development</Link>
          </div>
        </li>
        <li onClick={() => scrollToSection('industries')}>Industries</li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/about">About</Link></li>
        <li onClick={() => scrollToSection('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;