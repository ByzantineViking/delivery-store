import React from 'react'
import './Button.css'

const Button = (props) => {
    return(
        <div className={props.className} aria-label={props.ariaLabel}>
            {props.body}
        </div>
    )
}


export default Button