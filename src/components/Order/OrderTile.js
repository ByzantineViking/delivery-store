import React from 'react'
import { connect } from 'react-redux'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const OrderTile = (props) => {
    return (
        <div className='tile'>
            <div className='image-background'>
                <img className='tile-image' alt='restaurant' src={props.foodOrder.image}/>
            </div>
            <div className='divider'/>
            <div className='body-container'>
                <h2>{props.foodOrder.name}</h2>
                <span role="img" aria-label="Food is on it's way">🚴‍♂️On🚴‍♂️It&apos;s🚴‍♂️Way</span>
            </div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        foodOrder: state.foodOrder
    }
}
export default connect(mapStateToProps)(OrderTile)