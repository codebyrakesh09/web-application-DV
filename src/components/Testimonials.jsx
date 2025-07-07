import { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    quote: '"We were impressed with the speed and accuracy of the data mining services offered by this BI company. They were able to identify trends and patterns in our data that we didn\'t even know existed, which has led to some significant improvements in our operations."',
    author: 'Customer A',
  },
  {
    quote: '" The data warehousing services offered by this BI company have been exceptional. We were able to centralize all of our data sources and create a more cohesive data environment, which has made a huge difference in our day-to-day operations. "',
    author: 'Customer B',
  },
  {
    quote: '"We\'ve been working with this BI company for over a year now, and they have truly transformed the way we look at our data. Their reporting and analytics capabilities have helped us make better business decisions, and their team has been incredibly helpful and responsive."',
    author: 'Customer C',
  },
  {
    quote: '"The dashboards developed by this BI company have been instrumental in our ability to quickly access and analyze our key performance indicators. The dashboards are easy to use and highly customizable, which has allowed us to tailor our view of the data to our specific needs."',
    author: 'Customer C',
  },
  {
    quote: '"The consulting services provided by this BI company have been invaluable. Their team has a wealth of knowledge and expertise, and they were able to provide us with insights and recommendations that we never would have thought of on our own."',
    author: 'Customer C',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000); // automaticaly slide every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h2>Client Testimonials: See What Our Customers Have to Say About Us!</h2>
      <div className="testimonial-slider">
        {testimonials.map((item, index) => (
          <div
            className={`testimonial ${
              index === currentIndex ? 'active' : ''
            }`}
            key={index}
          >
            <p>{item.quote}</p>
            {/* <span>- {item.author}</span> */}
          </div>
        ))}
        <div className="slider-controls">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={currentIndex === idx ? 'active' : ''}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
