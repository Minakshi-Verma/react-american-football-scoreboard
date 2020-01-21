import React from "react";

const AwayButtons = props => {
    console.log("im props from away buttons" , props)
    return(
    <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick = {props.touchdown} >Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick = {props.field}>Away Field Goal</button> 
    </div>
    )

}
export default AwayButtons