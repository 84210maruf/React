import React from 'react';
import classes from './Scoop.module.css';

const Scoop = ({scoop}) => {
	console.log(scoop);
    return (
       
       <div className={[classes.scoop, classes[scoop]].join(' ')}></div>
    );
};

export default Scoop;