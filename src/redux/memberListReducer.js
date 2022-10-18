const initialState = [];

const memberListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_MEMBER_LIST':
            return state = action.payload;
        default:
            return state;
    }
}

export default memberListReducer;