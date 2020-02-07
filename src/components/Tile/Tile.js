import React from 'react'
import './Tile.css'
import Button from '../Button/Button.js'
const Tile = (props) => {
    console.log(props.restaurant)
    return (
        <div className='tile'>
            <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
            <h2>{props.restaurant.name}</h2>
            <div className='tile-body'>
                {props.restaurant.description}
            </div>
            <Button
                className='info-button'
                body=''
                alt='consider'
            />
            <Button
                className='wishlist-button'
                body='🚴‍♂️'
                alt='order'
            />
        </div>
    )
}


export default Tile