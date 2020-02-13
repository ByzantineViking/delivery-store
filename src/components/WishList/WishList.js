import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
const Wishlist = (props) => {
    const { wishlist, displayCollapsed, displayNone, ...nwProps } = props
    useEffect (() => {
        if (wishlist.length > 0) {
            displayCollapsed({ id: 'wishlist' })
        } else {
            displayNone({ id: 'wishlist' })
        }
    }, [wishlist, displayCollapsed, displayNone])
    const restaurantNames = () => {
        let holder = []
        Object.keys(wishlist).reduce((acc, key) =>
            holder = holder.concat(wishlist[key].name)
        , '')
        return holder
    }
    const handleClick = () => {
        if (nwProps.open.wishlist.collapsed) {
            displayNone({ id: 'drawer1' })
            displayNone({ id: 'drawer2' })
            nwProps.displayFull({ id: 'wishlist' })
        }
    }
    return(
        <div>
            {!nwProps.open.wishlist.hidden && <div className="wishlist-container">
                <h2>
                    <span role="img" aria-label="Delicious">
                        😋
                    </span>
                </h2>
                <div className="wishlist" onClick={handleClick}>
                    {nwProps.open.wishlist.full ?
                        <ExpandedWishlist /> :
                        restaurantNames(wishlist).join()
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
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)