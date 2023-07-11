import React from 'react';
import '../Css/Home.css'; // Import the CSS file for styling
import ThreeDComponent from './ThreeDComponent';
import TaskList from './TaskList';

const Home = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <img
          className="hero-image"
          src="/path/to/hero-image.jpg"
          alt="Hero Image"
        />
      </div>
      <div className="landing-content">
        <h1 className="heading">Welcome to Your Task and Goal Tracker!</h1>
        <p className="description">
          Track your tasks and goals in a gaming-inspired environment.
        </p>
        <TaskList />
        <h3>Want to save your data?</h3>
        <div className="cta-buttons">
          <button className="cta-button">Register</button>
          <button className="cta-button">Login</button>
        </div>
      </div>
      
      <ThreeDComponent />
    </div>
  );
};

export default Home;