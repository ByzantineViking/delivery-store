import React from 'react'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const OrderTile = (props) => {
    return (
        <div className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
            </div>
            <div className='divider'/>
            <div className='body-container'>
                <h2>{props.restaurant.name}</h2>
                <span role="img" aria-label="Food is on it's way">🚴‍♂️On🚴‍♂️It&apos;s🚴‍♂️Way</span>
            </div>


        </div>
    )
}

export default OrderTile