/**
 * Created by Sergeys on 15.11.2018.
 */
import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className="AnswersList">
        {props.answer.map((answer,index)=>{
         return(
             <AnswerItem
                 key={index}
                 answer= {answer}
                 onAnswerClick = {props.onAnswerClick}
                 state = {props.state ? props.state[answer.id] : null}
             />
         )
        })}
    </ul>
)
export default AnswersList;