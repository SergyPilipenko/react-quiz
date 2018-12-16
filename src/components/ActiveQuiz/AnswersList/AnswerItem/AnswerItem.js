/**
 * Created by Sergeys on 15.11.2018.
 */
import React from 'react';
import classes from './AnswerItem.css';

const AnswerItem = props => {




    return(
        <li className={
       ` AnswerItem ${props.state} `
    }  onClick = {() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}

        </li>
    )
}
export default AnswerItem;