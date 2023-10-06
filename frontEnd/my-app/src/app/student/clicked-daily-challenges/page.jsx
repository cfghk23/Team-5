"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import quizQuestions from './question2';
import AnswerOption from '../clicked-daily-challenges/answerOption';

function Quiz(props) {
//   function renderAnswerOptions(key) {
//     return (
//       <AnswerOption
//         key={key.content}
//         answerContent={key.content}
//         answerType={key.type}
//         answer={props.answer}
//         questionId={props.questionId}
//         onAnswerSelected={props.onAnswerSelected}
//       />
//     );
//   }

  return (
//     <CSSTransitionGroup
//       className="container"
//       component="div"
//       transitionName="fade"
//       transitionEnterTimeout={800}
//       transitionLeaveTimeout={500}
//       transitionAppear
//       transitionAppearTimeout={500}
//     >
      <div key={props.questionId}>
            <form action="/action_page.php">
                <p>You find a wallet on the ground with money and identification inside. What is the morally right thing to do?</p>
                      <input type="radio" id="html" name="fav_language" value="HTML"/>
                      <label for="html">Keep the wallet and use the money for yourself.</label><br/>
                      <input type="radio" id="css" name="fav_language" value="CSS"/>
                      <label for="css">Leave the wallet where you found it and walk away.</label><br/>
                      <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                      <label for="javascript">Take the wallet to a nearby authority or lost and found.</label>
                    <br/>  
                </form>
      </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;