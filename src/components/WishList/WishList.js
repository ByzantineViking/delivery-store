import React from 'react'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
const WishList = (props) => {
    const handleClick = () => {
        props.setList1Visibility(false)
        props.setList2Visibility(false)
        props.setWishlistExpansion(true)
    }
    return(
        props.wishlistContent   ?
            <div className="wishlist-container">
                <h2>
                    😋
                </h2>
                <div className="wishlist" onClick={handleClick}>
                    {props.wishlistExpansion    ?
                        <ExpandedWishlist
                            wishlistContent={props.wishlistContent}>

                        </ExpandedWishlist>     :
                        props.wishlistContent.join()
                    }
                </div>
            </div>
        // eslint-disable-next-line indent
                                : <div/>
    )
}

export default WishList