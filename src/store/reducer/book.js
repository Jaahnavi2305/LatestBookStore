const initialState= { 
    list: []
};

const book = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_BOOK'){
        return {...state, list: action.payload}
    }
    return state;
};

export default book; 