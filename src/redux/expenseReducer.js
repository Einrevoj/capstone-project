const initialState = [];

const expenseReducer= (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_EXPENSE':
            return state = action.payload;
        default:
            return state;
    }
}

export default expenseReducer;