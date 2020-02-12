import React from 'react'
import { connect } from 'react-redux'
import './Tile.css'
import EmojiButton from '../EmojiButton/EmojiButton'

import { orderFood, wish } from '../../reducers/choiceReducers'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const Tile = (props) => {
    const handleOrder = () => {
        props.orderFood(props.restaurant)
        props.wish([props.restaurant])
    }
    return (
        <div className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
                <EmojiButton
                    className='wishlist-button'
                    body='🤔'
                    alt='wishlist'
                    buttonAction={() => props.wish(props.wishlistContent.concat(props.restaurant))}
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

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        tags: state.tags,
    }
}
const mapDispatchToProps = {
    wish,
    orderFood
}
export default connect(mapStateToProps, mapDispatchToProps)(Tile)