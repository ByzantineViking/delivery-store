


const initialState = {
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
            return state.find(r => r.name === action.data.name) ? state : state.concat(action.data)
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