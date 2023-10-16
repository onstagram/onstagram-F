
let initialState={
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    userPhone: '',
}

function reducer(state=initialState, action){
    console.log(action);
    switch(action.type){
        case "SIGNUP":
            return{...state, 
                email:action.payload.email,
                password:action.payload.password,
                passwordCheck:action.payload.passwordCheck,
                userName:action.payload.userName,
                userPhone:action.payload.userPhone,
            };
        case "LOGIN":
            return{...state, 
                email:action.payload.email,
                password:action.payload.password,
            };
        default:
        return{...state};
    }
}

export default reducer;