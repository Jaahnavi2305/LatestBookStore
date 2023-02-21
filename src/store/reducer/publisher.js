const initialState= { 
    list: []
};

const publisher = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_PUBLISHER'){
        return {...state, list: action.payload}
    }
   // payload object(publisher) will get added in list
    if(action.type === 'ADD_PUBLISHER'){
        return {...state,  list : [...state.list, action.payload]}
    }
     return state;
};

export default publisher; 