import React from "react";

export default function Footer(props) {
    let isQuestionsAnswered = props.questionsAnswered[props.currentQuestion]
    let btn
    if (props.questionNumber !== 5) btn = <button onClick={props.nextQuestion} className="btn btn-primary" disabled={!isQuestionsAnswered}>Next Question</button>
    else btn = <button onClick={props.finishQuiz} className="btn btn-info">Finish Quiz</button>

    return (
        <div className="footer">
            <h2>{props.questionNumber} of {props.totalQuestions} Questions</h2>
            {btn}
        </div>
    )
}

