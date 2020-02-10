import React from 'react'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
const WishList = (props) => {
    const restaurantNames = () => {
        let holder = []
        Object.keys(props.wishlistContent).reduce((acc, key) =>
            holder = holder.concat(props.wishlistContent[key].name)
        , '')
        return holder
    }
    const handleClick = () => {
        props.setList1Visibility(false)
        props.setList2Visibility(false)
        props.setWishlistExpansion(true)
    }
    const visible = props.wishlistContent.length > 0 ? 'block' : 'none'
    return(
        props.wishlistContent && !props.order   ?
            <div className="wishlist-container" style={{ display:visible }}>
                <h2>
                    <span role="img" aria-label="Delicious">
                        😋
                    </span>
                </h2>
                <div className="wishlist" onClick={handleClick}>
                    {props.wishlistExpanded ?
                        <ExpandedWishlist
                            setList1Visibility={props.setList1Visibility}
                            setList2Visibility={props.setList2Visibility}
                            setWish={props.setWish}
                            setWishlistExpansion={props.setWishlistExpansion}
                            setOrder={props.setOrder}
                            wishlistContent={props.wishlistContent}/> :
                        restaurantNames(props.wishlistContent).join()
                    }
                </div>
            </div>
        // eslint-disable-next-line indent
                                : <div/>
    )
}

export default WishList