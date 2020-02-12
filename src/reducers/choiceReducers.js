


const visibility = Object.freeze({
    FULL: {
        full: true,
        collapsed: false,
        hidden: false
    },
    COLLAPSED: {
        full: false,
        collapsed: true,
        hidden: false
    },
    HIDDEN: {
        full: false,
        collapsed: false,
        hidden: true
    }
})


const initialState = {
    open: {
        drawer1: visibility.FULL,
        drawer2: visibility.COLLAPSED,
        drawer3: visibility.HIDDEN,
        wishlist: visibility.HIDDEN,
        order: visibility.HIDDEN,
    },
    wishlistContent: [],
    foodOrder: [],
}

export const wish = (restaurant) => {
    return {
        type: 'WISH',
        data: {
            wish: restaurant
        }
    }
}
export const wishReducer = (state = initialState.wishlistContent, action) => {
    switch (action.type) {
        case 'WISH':
            return state.wishlist.concat(action.data.wish)
        default:
            return state
    }
}
export const orderFood = (restaurant) => {
    return {
        type: 'ORDER_FOOD',
        data: {
            order: restaurant
        }
    }
}
export const orderFoodReducer = (state = initialState.foodOrder, action) => {
    switch (action.type) {
        case 'ORDER_FOOD':
            return state.order.concat(action.data.order)
        default:
            return state
    }
}