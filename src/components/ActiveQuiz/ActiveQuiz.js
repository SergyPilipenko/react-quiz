/**
 * Created by Sergeys on 15.11.2018.
 */
import React from 'react';
import classes from './AqtiveQuiz.css';
import AnswerList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className="ActiveQuiz">
       <p className="Question">
           <span>
               <strong>{props.answerNumber}</strong>&nbsp;
               {props.question}
           </span>
           <small>{props.answerNumber} из {props.quizLength}</small>
       </p>
           <AnswerList
               state = {props.state}
           answer={props.answers}
           onAnswerClick = {props.onAnswerClick}
           />
    </div>
)
export default ActiveQuiz;
