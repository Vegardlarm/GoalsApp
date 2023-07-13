import React from 'react';
import '../Css/Home.css';
import City from '../Images/neon_2.png';

const Home = () => {
  return (
    <div className="home-page">
      <div className="left-section">
        <h2>Gamer Goals</h2>
        <h1>Sign up for free today and start dominating your tasks with the power of Gamer Goals. Unleash your inner hero and conquer your goals like never before.</h1>
        <div className="buttons">
          <button className="signup-button">Sign Up</button>
          <button className="start-free-button">Start Free</button>
        </div>
      </div>
      <div className="right-section">
        <img src={City} alt="Squiggle" className="image" />
      </div>
    </div>
  );
};

export default Home;
