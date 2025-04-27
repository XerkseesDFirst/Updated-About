import Header from '../components/Header';
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <p>
          Amigo's Fitness Gym are passionate about empowering individuals 
          to achieve their fitness goals in a supportive and motivating environment.
          Whether you're looking to lose weight, build strength, or improve your endurance, 
          we offer a range of services designed to meet your unique needs.
        </p>
        <p>
          Our personalized training programs are led by expert coaches 
          who are dedicated to helping you reach your fitness potential. 
          We take the time to understand your specific goals 
          and make the most of each session's time to maximize your progress.
          Whether you're training for a specific event or just aiming for general health, 
          our one-on-one coaching sessions are available on a package basis.
        </p>
        <p>
          We also offer a variety of group fitness classes that
          are both fun and challenging. From high-intensity Tabata and Dynamic
          Functional Training, to the rhythm of Zumba and the mind-body
          connection of Yoga, our diverse classes cater to all fitness levels.
          For those seeking to improve their combat skills, we offer Boxing and
          Muay Thai training in a safe, high-energy environment.
        </p>
        <p className="tagline">
          We are your fitness community and your path to a healthier you.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;