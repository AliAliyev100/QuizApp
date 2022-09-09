import './App.css';
import React from 'react';
import Heaader from './componenets/Header';
import Question from './componenets/Question';
import Footer from './componenets/Footer';
import Finish from './componenets/Finish';
import quizzes from './data';

function App() {

  function nextQuestion() {
    setCurrentQuestion(prevQuestion => {
      if (prevQuestion >= 4) return prevQuestion
      return prevQuestion + 1
    })
  }

  function increaseCorrectAnswers() {
    setCorrectAnswers(prevCorrects => prevCorrects + 1)
  }

  function finishQuiz() {
    setQuizFinished(true)
  }

  function answer(id) {
    setQuestionsAnswered(prev => {
      let a = [...prev]
      a[id - 1] = true
      return a
    })
  }

  function restartGame() {
    setCurrentQuestion(0)
    setCorrectAnswers(0)
    setQuizFinished(false)
    setQuestionsAnswered(Array(5).fill(false))
  }
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);
  const [questionsAnswered, setQuestionsAnswered] = React.useState(Array(5).fill(false))


  let quiz = quizzes.map((quiz, index) => {
    return (
      <Question
        key={index}
        number={index + 1}
        question={quiz.question}
        answer1={quiz.first}
        answer2={quiz.second}
        answer3={quiz.third}
        answer4={quiz.fourth}
        correct={quiz.correctQuestionNumber}
        increaseCorrectAnswers={increaseCorrectAnswers}
        questionsAnswered={answer}
      />
    )
  })



  return (
    <div className='quiz'>
      {quizFinished === false ? <div>
        <Heaader />
        {quiz[currentQuestion]}
        <Footer
          nextQuestion={nextQuestion}
          questionNumber={currentQuestion + 1}
          totalQuestions={quiz.length}
          finishQuiz={finishQuiz}
          questionsAnswered={questionsAnswered}
          currentQuestion={currentQuestion}
        />
      </div>
        : <Finish
          correctAnswers={correctAnswers}
          restart={restartGame}
        />
      }

    </div>
  );
}

export default App;
