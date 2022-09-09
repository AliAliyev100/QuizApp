import React from "react";
export default function Question(props) {

    let styleTrueAnswer = {
        background: "#d4edda",
        cursor: "default"
    }
    let styleFalseAnswer = {
        backgroundColor: "#f8d7da",
        cursor: "default"
    }

    let wrongSymbol = <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>

    let correctSymbol = <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>

    const [styles, setStyles] = React.useState(Array(4));
    const [isAnswered, setIsAnswered] = React.useState(false);
    const [symbol, setSymbol] = React.useState(Array(4))


    function checkAnswer(id, e) {
        if (isAnswered === true) return
        setIsAnswered(true)

        props.questionsAnswered(props.number)
        setStyles(prevStyle => {
            let a = [...prevStyle]
            a[props.correct - 1] = styleTrueAnswer
            return a
        })

        setSymbol(prevSymbol => {
            let a = [...prevSymbol]
            a[props.correct - 1] = correctSymbol
            return a
        })

        if (id === props.correct) {
            props.increaseCorrectAnswers()
        }

        else {
            setStyles(prevStyle => {
                let a = [...prevStyle]
                a[id - 1] = styleFalseAnswer
                return a
            })

            setSymbol(prevSymbol => {
                let a = [...prevSymbol]
                a[id - 1] = wrongSymbol
                return a
            })

        }
    }

    return (
        <div className="question-div">
            <h2 className="question-name">{props.number}. {props.question}</h2>
            <div className="answers">
                <h2 onClick={(e) => checkAnswer(1, e)} className="answer" style={styles[0]}>{props.answer1}{symbol[0]}</h2>
                <h2 onClick={(e) => checkAnswer(2, e)} className="answer" style={styles[1]}>{props.answer2}{symbol[1]}</h2>
                <h2 onClick={(e) => checkAnswer(3, e)} className="answer" style={styles[2]}>{props.answer3}{symbol[2]}</h2>
                <h2 onClick={(e) => checkAnswer(4, e)} className="answer" style={styles[3]}>{props.answer4}{symbol[3]}</h2>
            </div>
        </div>
    )
}
