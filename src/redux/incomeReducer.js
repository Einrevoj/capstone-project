const initialState = [];

const incomeReducer= (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_REPORT_INCOME':
            return state = action.payload;
        default:
            return state;
    }
}

export default incomeReducer;
