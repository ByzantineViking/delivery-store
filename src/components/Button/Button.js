import React from 'react'
import './Button.css'

const Button = (props) => {
    return(
        <div className={props.className}>
            {props.body}
        </div>
    )
}


export default Button