import React from 'react'
import OrderTile from './OrderTile'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import './Order.css'
const Order = (props) => {
    return(
        <div className="order-container">
            {props.open.order.full &&<h3>Your orders:</h3>}
            {props.open.order.full && <div className="order">
                {props.foodOrder.map(restaurant => <OrderTile key={uuidv1()} restaurant={restaurant}/>)}
            </div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        open: state.open,
        foodOrder: state.foodOrder,
    }
}
export default connect(mapStateToProps)(Order)