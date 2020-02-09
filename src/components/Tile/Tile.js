import React from 'react'
import './Tile.css'
import Button from '../Button/Button.js'
const Tile = (props) => {
    return (
        <div className='tile'>
            <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
            <h2>{props.restaurant.name}</h2>
            <p>
                {props.restaurant.description}
            </p>
            <Button
                className='wishlist-button'
                body='🤔This?'
                alt='wishlist'
            />
            <Button
                className='order-button'
                body='🚴‍♂️Order'
                alt='order'
            />
        </div>
    )
}


export default Tile