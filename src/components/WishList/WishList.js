import React from 'react'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
const WishList = (props) => {
    const restaurantNames = () => {
        let holder = []
        Object.keys(props.wishlistContent).reduce((acc, key) =>
            holder = holder.concat(props.wishlistContent[key].name)
        , '')
        console.log(holder)
        return holder
    }
    const handleClick = () => {
        props.setList1Visibility(false)
        props.setList2Visibility(false)
        props.setWishlistExpansion(true)
    }
    return(
        props.wishlistContent   ?
            <div className="wishlist-container">
                <h2>
                    <span role="img" aria-label="Delicious">
                        😋
                    </span>
                </h2>
                <div className="wishlist" onClick={handleClick}>
                    {props.wishlistExpanded ?
                        <ExpandedWishlist wishlistContent={props.wishlistContent}/> :
                        restaurantNames(props.wishlistContent).join()
                    }
                </div>
            </div>
        // eslint-disable-next-line indent
                                : <div/>
    )
}

export default WishList