export const listPublisher= () => (dispatch) =>{
    fetch('http://localhost:8585/api/publisher/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_PUBLISHER',payload: data}) )
}

export const AddPublisher = (data) => {
    return {
        type: 'ADD_PUBLISHER',
        payload: data
    }
}