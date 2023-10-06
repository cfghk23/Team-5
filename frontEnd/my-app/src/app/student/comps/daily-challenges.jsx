import * as React from "react";
import Question from "./question";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "../../styles.css"; 

export function DailyChallenge() {
  const [gameStarted, setGameStarted] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [answerChecked, setAnswerChecked] = React.useState(false);
  const [score, setScore] = React.useState(0); 

  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function decreaseScore() {
    setScore((prevScore) => prevScore - 1);
  }

  React.useEffect(() => {
    fetch("https://")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  function startGame() {
    setGameStarted(true);
  }

  function checkAnswers() {
    setAnswerChecked(true);
  }

  function playAgain() {
    setAnswerChecked(false);
    fetch("https://")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }

  const questionElements = questions.map((question, index) => (
    <Question
      key={index}
      questionText={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswers={question.incorrect_answers}
      answerChecked={answerChecked}
      increaseScore={increaseScore} 
      decreaseScore={decreaseScore} 
    />
  ));

  return gameStarted ? (
    <div className="flex"> 
      <img src="../../assets/balloon.jpg" alt="Balloon" /> 
      <div className="questions-page-content">
        <h1>Daily Challenges</h1>
        <div className="questions">{questionElements}</div>
        {answerChecked ? (
          <div className="bottom-section">
            <h3>You scored {score}/5 correct answers!</h3>
            <button className="small-btn" onClick={playAgain}>
              Play Again
            </button>
          </div>
        ) : (
          <button className="small-btn" onClick={checkAnswers}>
            Check Answers
          </button>
        )}
      </div>
    </div>
  ) : (
    <main>
      <div className="start-game-page">
        <div className="start-game-description">
          <h1>Daily Challenges</h1>
          <p>Test your skills by answering these questions!</p>
          <button className="start-btn" onClick={startGame}>
            Start Quiz
          </button>
        </div>
      </div>
      <img src={blobBlue} alt="blue blob" className="blob-blue" />
    </main>
  );
}
