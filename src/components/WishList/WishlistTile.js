import React from 'react'
import './Wishlist.css'
import EmojiButton from '../EmojiButton/EmojiButton'

/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const WishlistTile = (props) => {
    return (
        <div id='wishlist' className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
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


export default WishlistTile