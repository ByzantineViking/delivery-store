import React from 'react'
import './EmojiButton.css'

const EmojiButton = (props) => {
    return(
        <div className={props.className} alt={props.alt}>
            <input type="button" className="emoji-button" onClick={props.buttonAction} value={props.body}></input>
        </div>
    )
}


export default EmojiButton