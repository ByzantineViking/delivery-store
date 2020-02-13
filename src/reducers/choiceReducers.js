


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
    wishlist: [],
    foodOrder: [],
}

export const wish = (restaurant) => {
    return {
        type: 'WISH',
        data: restaurant
    }
}
export const deleteWish = (restaurant) => {
    return {
        type: 'UNWISH',
        data: restaurant
    }
}
export const wishReducer = (state = initialState.wishlist, action) => {
    switch (action.type) {
        case 'WISH':
            return state.concat(action.data)
        case 'UNWISH':
            return state.filter(restaurant => restaurant.name !== action.data.name)
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
            return state.concat(action.data.order)
        default:
            return state
    }
}