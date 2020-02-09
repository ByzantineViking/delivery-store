import React from 'react'
import './EmojiButton.css'

const EmojiButton = (props) => {
    return(
        <div className={props.className} aria-label={props.ariaLabel}>
            <input type="button" className="emoji-button" onClick={() => console.log('moi')} value={props.body}></input>
        </div>
    )
}


export default EmojiButton