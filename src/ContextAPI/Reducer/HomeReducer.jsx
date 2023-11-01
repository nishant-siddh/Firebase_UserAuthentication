const HomeReducer = (state, action) => {
    switch (action.type) {
        case 'Check_Is_Logged_In':
            return {
                ...state,
                isLoggedIn: action.payload
            }

        case 'Set_Username':
            return {
                ...state,
                username: action.payload
            }
    
        default:
            return state
    }
}

export default HomeReducer