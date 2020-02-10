import React from 'react'
import OrderTile from './OrderTile'
import './Order.css'
const Order = (props) => {
    const visible = props.order ? 'block' : 'none'
    return(
        <div className="order" style={{ display:visible }}>
            <OrderTile restaurant={props.order}></OrderTile>
        </div>
    )
}

export default Order