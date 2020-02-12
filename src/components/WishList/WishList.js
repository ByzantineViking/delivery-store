import React from 'react'
import { connect } from 'react-redux'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
const Wishlist = (props) => {
    const restaurantNames = () => {
        let holder = []
        Object.keys(props.wishlist).reduce((acc, key) =>
            holder = holder.concat(props.wishlist[key].name)
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
    return(
        <div>
            {!props.open.wishlist.hidden && <div className="wishlist-container">
                <h2>
                    <span role="img" aria-label="Delicious">
                        😋
                    </span>
                </h2>
                <div className="wishlist" onClick={handleClick}>
                    {props.open.wishlist.full ?
                        <ExpandedWishlist /> :
                        restaurantNames(props.wishlist).join()
                    }
                </div>
            </div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        open: state.open,
        wishlist: state.wishlist,
    }
}
const mapDispatchToProps = {
    displayFull,
    displayCollapsed,
    displayNone
}
export default connect(mapStateToProps, mapDispatchToProps)(WishList)
