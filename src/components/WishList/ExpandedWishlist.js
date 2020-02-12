import React from 'react'
import WishlistTile from './WishlistTile'
import uuidv1 from 'uuid/v1'

const ExpandedWishlist = (props) => {
    return(
        <div className="expanded-wishlist">
            {props.wishlistContent.map(restaurant =>
                <WishlistTile
                    setWish={props.setWish}
                    setOrder={props.setOrder}
                    wishlistContent={props.wishlistContent}
                    key={uuidv1()}
                    restaurant={restaurant}
                />
            )}
        </div>
    )
}

export default ExpandedWishlist