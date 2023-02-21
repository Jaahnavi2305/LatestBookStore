const intialState= {
    list : []
};

const category = (state = intialState, action)=>{
    if(action.type === 'GET_LIST_CATEGORY'){
        return {...state, list: action.payload}
    }
     //payload object(todo) will get added in list
    if(action.type === 'ADD_CATEGORY'){
         return {...state,  list : [...state.list, action.payload]}
    }
    
    return state;
};

export default category;