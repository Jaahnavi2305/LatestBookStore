const initialState= { 
    list: []
};

const customer = (state =initialState, action)=>{
    if(action.type === 'GET_LIST_CUSTOMER'){
        return {...state, list: action.payload}
    }
    return state;
};

export default customer; 