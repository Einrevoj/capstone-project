const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return state = action.payload;
        case 'LOGIN_USER':
            return state = action.payload;
        case 'LOGOUT_USER':
            return state = initialState;
        default:
            return state;
    }
}

export default userReducer;