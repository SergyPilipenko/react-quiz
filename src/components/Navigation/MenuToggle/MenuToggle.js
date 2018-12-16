/**
 * Created by Sergeys on 21.11.2018.
 */
import React from 'react';
import classes from './MenuToggle.css';

const MenuToggle = props =>{
    const cls = ['MenuToggle','fa'];
    if(props.isOpen){
        cls.push('fa-times');
        cls.push('open');
    }else {
        cls.push('fa-bars');
    }
    return(
        <i className={cls.join(' ')}
        onClick={props.onToggle}/>
    )
}
export default MenuToggle;
