import React from "react";

const HomeButtons = (props) => {

    return(
    <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick = {props.touchdown}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick = {props.field}>Home Field Goal</button>
    </div>
    )
}

export default HomeButtons