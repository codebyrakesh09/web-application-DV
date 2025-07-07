// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import About from './pages/About';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Service4 from './pages/Service4';
import Service5 from './pages/Service5';
import Service6 from './pages/Service6';

import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Terms from "./pages/Terms";

import ScrollToTop from './components/ScrollToTop';

import Power_BI from './pages/view-job/Power_BI';
import Tableau from './pages/view-job/Tableau';
import Micro from './pages/view-job/Micro';
import Sql from './pages/view-job/Sql';
import Marketing from './pages/view-job/Marketing';
import HR_rep from './pages/view-job/HR_rep';

// imp 
// import Service6 from './pages/Service6';
// Service6 is just a alias of the component inside Service6.jsx

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Always resets scroll on route change */}
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/service1" element={<Service1 />} />
            <Route path="/service2" element={<Service2 />} />
            <Route path="/service3" element={<Service3 />} />
            <Route path="/service4" element={<Service4 />} />
            <Route path="/service5" element={<Service5 />} />
            <Route path="/service6" element={<Service6 />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms />} />

            <Route path='/view-job/Power_BI' element={<Power_BI />} />
            <Route path='/view-job/Tableau' element={<Tableau />} />
            <Route path='/view-job/Micro' element={<Micro />} />
            <Route path='/view-job/Sql' element={<Sql />} />
            <Route path='/view-job/Marketing' element={<Marketing />} />
            <Route path='/view-job/HR_rep' element={<HR_rep />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
