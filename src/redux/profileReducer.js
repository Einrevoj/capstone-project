const initialState = [];

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_PROFILE':
            return state = action.payload;
        default:
            return state;
    }
}

export default profileReducer;