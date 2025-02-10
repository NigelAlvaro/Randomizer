import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../assets/PIG.jpg";
import "../styles/Home.css";
import { useState } from 'react';
import { FaDice } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const [isRolling, setIsRolling] = useState(false);

  const handleRandomNavigation = () => {
    const pages = ['yunsheng', 'nigel', 'tommy'];
    setIsRolling(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * pages.length);
      setIsRolling(false);
      navigate(`/${pages[randomIndex]}`);
    }, 2000); // Increased to 2 seconds for better visibility
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 className="title">Ascent Residents</h1>
        <p className="subtitle">Who is washing the dishes</p>
        {isRolling && (
          <div className="dice-container">
            <FaDice className="dice-icon rolling" />
          </div>
        )}
        <button 
          className="primary-button" 
          onClick={handleRandomNavigation}
          disabled={isRolling}
        >
          <span className="button-text">Random MF</span>
        </button>
      </div>
    </div>
  );
}

export default Home;