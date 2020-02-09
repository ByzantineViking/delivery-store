import React from 'react'
import './Tile.css'
import EmojiButton from '../EmojiButton/EmojiButton'
const Tile = (props) => {
    return (
        <div className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
                <EmojiButton
                    className='wishlist-button'
                    body='🤔'
                    alt='wishlist'
                />
            </div>
            <div className='divider'/>
            <div className='body-container'>
                <h2>{props.restaurant.name}</h2>
                <div className='body-bottom'>
                    <p>
                        {props.restaurant.description}
                    </p>
                    <EmojiButton
                        className='order-button'
                        body='🚴‍♂️'
                        alt='order'
                    />
                </div>

            </div>


        </div>
    )
}


export default Tile