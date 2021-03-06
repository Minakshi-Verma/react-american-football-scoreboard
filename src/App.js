import React, {useState} from "react"
import "./App.css";
import BottomRow from "./components/BottomRow";
import HomeButtons from "./components/HomeButtons"
import AwayButtons from "./components/AwayButtons"

function App() {
  
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  
  const homeTouchdown = () => setHomeScore(homeScore + 7);
  const homeFieldGoal = () => setHomeScore(homeScore + 3)
  const awayTouchdown = () => setAwayScore(awayScore + 7)
  const awayFieldGoal = () => setAwayScore(awayScore + 3)
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>

          <div className="timer">00:03</div>

          <div className="away">
            <h2 className="away__name">Tigers</h2>            
            <div className="away__score">{awayScore}</div>            
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        {/* <div className="homeButtons"> */}

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
         

           {/* -------- */}
          {/* <button className="homeButtons__touchdown" onClick = {homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {homeFieldGoal}>Home Field Goal</button> */}
          <HomeButtons touchdown={homeTouchdown} field = {homeFieldGoal}/>
            {/* -------- */}
          {/* <HomeButtons /> */}
        {/* </div> */}
        {/* <div className="awayButtons"> */}
         
        {/* --------- */}
          {/* <button className="awayButtons__touchdown" onClick = {awayTouchdown} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {awayFieldGoal}>Away Field Goal</button>  */}
          <AwayButtons touchdown={awayTouchdown} field = {awayFieldGoal}/>
          {/* ---------- */}
        {/* </div> */}
      </section>
    </div>
  );
}

export default App;

