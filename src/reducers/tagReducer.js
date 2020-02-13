

const initialState = {
    tags: []
}


export const setTags = (tags) => {
    return {
        type: 'SAVE_TAGS',
        data: tags
    }
}
export const tagReducer = (state = initialState.tags, action) => {
    switch (action.type) {
        case 'SAVE_TAGS':
            return action.data
        default:
            return state
    }
}