const initialData = {
    loginuser: {}
}

function userReducer(state = initialData, action){
    state = {loginuser: {...state.loginuser}}

    switch (action.type) {

        case 'USER_LOGIN' :
            state.loginuser = action.payload
            break;
    
        case 'LOGOUT' :
            state.loginuser = {}
            localStorage.removeItem('token')
            break;
    
        default:
            break;
    }

    return state
}


export default userReducer