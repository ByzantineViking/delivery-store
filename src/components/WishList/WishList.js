import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
import './Wishlist.css'
import ExpandedWishlist from './ExpandedWishlist'
import EmojiButton from '../EmojiButton/EmojiButton'
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

    const collapseWishlist = () => {
        displayCollapsed({ id: 'wishlist' })
        displayCollapsed({ id: 'drawer2' })
        nwProps.displayFull({ id: 'drawer1' })
    }

    return(
        <div className='wishlist-remainder-when-hidden'>
            {!nwProps.open.wishlist.hidden && <div className="wishlist-container">
                <div className='title-bar'>
                    <h2>
                        <span role="img" aria-label="Delicious">
                            😋
                        </span>
                    </h2>
                    {nwProps.open.wishlist.full && <EmojiButton
                        className='x-button'
                        body='❌'
                        alt='close-column'
                        buttonAction={() => collapseWishlist()}
                    />}
                </div>
                <div className="wishlist" onClick={handleClick}>
                    {nwProps.open.wishlist.full ?
                        <ExpandedWishlist /> :
                        <div className='collapsed-wishlist'>{restaurantNames(wishlist).join()}</div>
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
