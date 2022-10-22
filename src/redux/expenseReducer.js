const initialState = [];

const expenseReducer= (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_REPORTEXPENSE':
            return state = action.payload;
        default:
            return state;
    }
}

export default expenseReducer;