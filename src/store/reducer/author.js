const initialState= { 
    list: []
};

const author = (state =initialState, action)=>{
    // //payload object(todo) will get added in list
    // if(action.type === 'ADD_CUSTOMER'){
    //     return {...state,  list : [...state.list, action.payload]}
    // }
    // else
    if(action.type === 'GET_LIST_AUTHOR'){
        return {...state, list: action.payload}
    }
    return state;
};

export default author; 