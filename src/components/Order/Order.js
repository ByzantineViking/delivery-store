import React from 'react'
import OrderTile from './OrderTile'
import { connect } from 'react-redux'
import './Order.css'
const Order = (props) => {
    return(
        <div>
            {props.open.order.open && <div className="order">
                <OrderTile/>
            </div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        open: state.open,
    }
}
export default connect(mapStateToProps)(Order)