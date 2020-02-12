import React from 'react'
import './Tile.css'
import EmojiButton from '../EmojiButton/EmojiButton'

/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const Tile = (props) => {
    const handleOrder = () => {
        props.setOrder(props.restaurant)
        props.setWish([props.restaurant])
    }
    return (
        <div className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
                <EmojiButton
                    className='wishlist-button'
                    body='🤔'
                    alt='wishlist'
                    buttonAction={() => props.setWish(props.wishlistContent.concat(props.restaurant))}
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
                        buttonAction={() => handleOrder()}
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