import React from 'react'
import { connect } from 'react-redux'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducers'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
const Wishlist = (props) => {
    const restaurantNames = () => {
        let holder = []
        Object.keys(props.wishlistContent).reduce((acc, key) =>
            holder = holder.concat(props.wishlistContent[key].name)
        , '')
        return holder
    }
    const handleClick = () => {
        if(props.open.wishlist.collapsed) {
            props.displayNone({ id: 'drawer1' })
            props.displayNone({ id: 'drawer2' })
            props.displayFull({ id: 'wishlist' })
        }
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
                    {props.open.wishlist.full ?
                        <ExpandedWishlist
                            setWish={props.setWish}
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
const mapStateToProps = (state) => {
    return {
        open: state.open
    }
}
const mapDispatchToProps = {
    displayFull,
    displayCollapsed,
    displayNone
}
export default connect(mapStateToProps, mapDispatchToProps)(WishList)
