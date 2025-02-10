import React from "react";
import Ng from "../assets/Nigel.jpg";
import { RandomReveal } from "react-random-reveal";


function Nigel() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Ng})` }}>
              <div className="App">
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '2px'
                }}>
                  <RandomReveal
                    isPlaying
                    duration={3}
                    revealDuration={1.6}
                    characters="This MF is washing the dishes"
                    onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                  />
                </h1>
              </div>
    </div>
  );
}

export default Nigel;