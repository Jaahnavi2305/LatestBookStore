const initialState= {
    list: []
};

const review = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_REVIEW'){
        return {...state, list: action.payload}
    }
   

    return state;
};

export default review; 