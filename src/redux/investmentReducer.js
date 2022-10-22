const initialState = [];

const investmentReducer= (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_INVESTMENT':
            return state = action.payload;
        default:
            return state;
    }
}

export default investmentReducer;