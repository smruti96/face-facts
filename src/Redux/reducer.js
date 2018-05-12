const initialState = {
    ageGroup:'',
    gender:'',
    emotions:{},
    user:{},
    loggedIn:false,
    hasAnalysed: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user:action.payload,
                loggedIn:true
            }
        case 'ANALYZE_IMAGE_SUCCESS':
            return {
                ...state,
                ageGroup:action.ageGroup,
                gender:action.gender,
                emotions:action.emotions,
                hasAnalysed: true
            }
        default:
            return state
    }
}

export default reducer;