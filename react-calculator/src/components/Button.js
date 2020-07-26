import React from 'react'
import './Button.css'

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === '='
}

const Button = (props) => 
    
<div className={`btn-wrapper ${isOperator(props.children) ? null : "operator"}`}>{props.children}</div>
    


export default Button