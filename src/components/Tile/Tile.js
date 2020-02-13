import React from 'react'
import { connect } from 'react-redux'
import './Tile.css'
import EmojiButton from '../EmojiButton/EmojiButton'

import { orderFood, wish, deleteWish } from '../../reducers/choiceReducers'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const Tile = (props) => {
    const handleOrder = () => {
        props.orderFood(props.restaurant)
        props.deleteWish(props.restaurant)
        props.displayFull({ id: 'order' })
        props.displayCollapsed({ id: 'drawer1' })
        props.displayNone({ id: 'drawer2' })
    }
    const handleWish = () => {
        props.wish(props.restaurant)
        props.displayCollapsed({ id: 'wishlist' })
    }
    return (
        <div className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.restaurant.image}/>
                <EmojiButton
                    className='wishlist-button'
                    body='🤔'
                    alt='wishlist'
                    buttonAction={() => handleWish()}
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
        wishlist: state.wishlist
    }
}
const mapDispatchToProps = {
    wish,
    deleteWish,
    orderFood,
    displayCollapsed,
    displayFull,
    displayNone
}
export default connect(mapStateToProps, mapDispatchToProps)(Tile)