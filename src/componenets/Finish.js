import React from "react";

export default function Finish(props) {
    let styles = {
        fontSize: "15rem",
        paddingTop: "3rem",
        color: "#007bff"
    }
    return (
        <div className="finish-game">
            <i style={styles} className='fas'>&#xf521;</i>
            <div className="finish-notes">
                <h1>You have completed the quiz</h1>
                <h2>{props.correctAnswers >= 3 ? "Congratulations!" : ""} You got {props.correctAnswers} correct answers!</h2>
                <button className="btn btn-info restart-btn" onClick={props.restart}>Start Again</button>
            </div>
        </div>
    )
}