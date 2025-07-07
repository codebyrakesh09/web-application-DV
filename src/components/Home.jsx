import Services from './Services';
import Industries from './Industries';
import EthicsVisionMission from './EthicsVisionMission';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import '../styles/Home.css';


function Home() {
  return (
    <div>
      <section id="home" className="home-hero">
        {/* play video */}
        <video className="hero-video" autoPlay muted loop playsInline> 
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>

        <div className="home-overlay">
          <h1 className="company-name">
            <span className='highlight heading'>Empower</span> Your Business <span className='small-with'>with</span>
          </h1>
          <p className="slogan">
            Advanced Data Analytics and Business Intelligence          
          </p>
          <p className="slogan">
            Data. <span className="highlight">Innovation</span>. Analytics.
          </p>

          <button className="connect-button"
          onClick={() => { // scroable button
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' }); // function applied to contact element in section.
          }}>
            Let's Connect
          </button>

        </div>
      </section>
      <section id="ethics"><EthicsVisionMission /></section>
      <section id="services"><Services /></section>
      <section id="industries"><Industries /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactUs /></section>
    </div>
  );
}

export default Home;
