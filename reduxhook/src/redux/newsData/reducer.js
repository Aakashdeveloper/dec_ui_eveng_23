export const initialState = {};

export default(state = initialState, action) => {
    switch(action.type){
        case 'LATEST_NEWS':{
            return{
                ...state,
                latestNews:action.payload
            }
        }
        default:
            return state
    }
}