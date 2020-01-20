//TODO: STEP 1 - Impadded useStaeort the useState hook.

// import React from "react";
//-------
import React, {useState} from "react"
//---------

import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
//------There are 3 slices of useState in this problem
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [startTimer, setStartTimer] = useState(0)

  const addSevenHome = event =>{
    setHomeScore(homeScore + 7);
  }
  const addThreeHome = event =>{
    setHomeScore(homeScore + 3)
  }

  const addSevenAway = event =>{
    setAwayScore(awayScore + 7)
  }
  const addThreeAway = event =>{
    setAwayScore(awayScore + 3)
  }

    //--------
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/* <div className="home__score">32</div> */}
            {/* //--------- */}

            <div className="home__score">{homeScore}</div>

            {/* //-------------- */}
          </div>
          {/* <div className="timer">00:03</div> */}

         {/* /------------ */}

          <div className="timer">{startTimer}</div>

          {/* ------------ */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>  
            {/* <div className="away__score">32</div> */}

             {/* //--------- */}

             <div className="away__score">{awayScore}</div>

            {/* //-------------- */}
            
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button> */}

           {/* -------- */}
          <button className="homeButtons__touchdown" onClick = {addSevenHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {addThreeHome}>Home Field Goal</button>
            {/* -------- */}
          
        </div>
        <div className="awayButtons">
          {/* <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button> */}
        {/* --------- */}
          <button className="awayButtons__touchdown" onClick = {addSevenAway} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {addThreeAway}>Away Field Goal</button> 

          {/* ---------- */}
        </div>
      </section>
    </div>
  );
}

export default App;
