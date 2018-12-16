/**
 * Created by Sergeys on 19.11.2018.
 */
import React from 'react';
import classes from './Button.css';

const Button = props => {
    return(
        <button onClick={props.onClick} className="Button" disabled={props.disabled}>
            {props.children}
        </button>
    )
}
export default Button;
