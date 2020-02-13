import React from 'react'
import './Wishlist.css'
import EmojiButton from '../EmojiButton/EmojiButton'
import { connect } from 'react-redux'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
import { wish, deleteWish, orderFood } from '../../reducers/choiceReducer'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const WishlistTile =  (props) => {
    const handleOrder = () => {
        props.orderFood(props.restaurant)
        props.deleteWish(props.restaurant)
        props.displayFull({ id: 'order' })
        props.displayCollapsed({ id: 'drawer1' })
        props.displayNone({ id: 'drawer2' })
        props.displayNone({ id: 'drawer3' })
    }
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
                        buttonAction={() => handleOrder()}
                    />
                </div>

            </div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        open: state.open,
        wishlist: state.wishlist
    }
}
const mapDispatchToProps = {
    displayFull,
    displayCollapsed,
    displayNone,
    wish,
    orderFood,
    deleteWish,
}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistTile)