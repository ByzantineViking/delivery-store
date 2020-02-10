import React from 'react'
import WishlistTile from './WishlistTile'
const ExpandedWishlist = (props) => {
    console.log(props.wishlistContent)
    return(
        <div className="expanded-wishlist">
            {props.wishlistContent.map(restaurant =>
                <WishlistTile
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            )}
        </div>
    )
}

export default ExpandedWishlist