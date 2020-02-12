import React from 'react'
import './Wishlist.css'
import EmojiButton from '../EmojiButton/EmojiButton'
import { connect } from 'react-redux'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const WishlistTile = (props) => {
    const handleOrder = () => {
        props.setOrder(props.restaurant)
        props.setWish([props.restaurant])

        props.displayFull({ id: 'order' })
        props.displayCollapsed({ id: 'drawer1' })
        props.displayNone({ id: 'drawer2' })
        props.displayCollapsed({ id: 'wishlist' })
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
        open: state.open
    }
}
const mapDispatchToProps = {
    displayFull,
    displayCollapsed,
    displayNone
}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistTile)