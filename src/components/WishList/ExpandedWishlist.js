import React from 'react'
import WishlistTile from './WishlistTile'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'

const ExpandedWishlist = (props) => {
    return(
        <div className="expanded-wishlist">
            {props.wishlist.map(restaurant =>
                <WishlistTile
                    key={uuidv1()}
                    restaurant={restaurant}
                />
            )}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist
    }
}
export default connect(mapStateToProps)(ExpandedWishlist)