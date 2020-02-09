import React from 'react'
import './WishList.css'
const WishList = (props) => {
    return(
        props.wishlistContent           ?
            <div className="wishlist">
                {props.wishlistContent}
            </div>                      :
            <div/>
    )
}

export default WishList