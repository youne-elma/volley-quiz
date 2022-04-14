import React from 'react'
import { Link } from 'react-router-dom'
// import { Spring } from 'react-spring';
// import SVGS
import blop1 from '../images/blop1.png'
import blop2 from '../images/blop2.png'
import spikeImage from '../images/spike-image.png'
import volleyballIcon from '../images/volleyball-icon.png'


const StartGame = () => {
  return (
    // <Spring
    //   from={{opacity: 0}}
    //   to={{opacity: 1}}
    // >
      <div className="main start-game">
          <img className="blop1" src={blop1} alt="blop1"/>
          <img className="blop2" src={blop2} alt="blop2"/>
          <div className="main-text">
              <h1 className="title-quiz">Volleyball Quiz</h1>
              <p className="parag-quiz">a quiz about volleyball,<br /> hurry up and start the quiz</p>
              <Link to="/volley-quiz/game" className="start-button">start the quiz</Link>
          </div>
          <img className="spike-image" src={spikeImage} alt="spike volleyball"/>
          <img className="volleyball-icon" src={volleyballIcon} alt="volleyball ball"/>
      </div>
  )
}

export default StartGame;