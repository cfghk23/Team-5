"use client"
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
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function DailyChallenge() {
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

  function imageClick(){
    return (
      <Routes>
        <Route path="/clicked-daily-challenges" element={<Index />} />
        <Route path="about" element={<About />} />
      </Routes>
    );
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

  const imageLink = "https://images.unsplash.com/photo-1602153883150-a442f874f839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80";

  return gameStarted ? (
    <div className=""> 
        <h1 class="place-items-center">Daily Challenges</h1>
        <div className="questions-page-content flex">
          <Link href="/student/clicked-daily-challeges">
            <Image onClick={imageClick} src={imageLink} height={100} width={100} />
            </Link>
          <Link href="/student/clicked-daily-challege">
            <Image onClick={imageClick} src={imageLink} height={100} width={100} />
            </Link>
          <Link href="/student/clicked-daily-challege">
            <Image onClick={imageClick} src={imageLink} height={100} width={100} />
            </Link>
          <Link href="/student/clicked-daily-challege">
            <Image onClick={imageClick} src={imageLink} height={100} width={100} />
            </Link>
            {/* <img src={Image} alt="balloon "> BALLOON </img> */}
        <div className="questions">{questionElements}</div>
        </div>
        {answerChecked ? (
          <div className="bottom-section">
            <h3>You scored {score}/5 correct answers!</h3>
            <button className="small-btn" onClick={playAgain}>Play Again</button>
          </div>
        ) : (
          <button className="small-btn" onClick={checkAnswers}>Check Answers</button>
        )}
        <div></div>
    </div>
  ) : (
    <main>
      <div className="start-game-page">
        <div className="start-game-description">
          <h1>Daily Challenges</h1>
          <p>Test your skills by answering these questions!</p>
          <Button class=""className="start-btn" onClick={startGame}>
            Start Quiz
          </Button>
        </div>
      </div>
    </main>
  );
}
