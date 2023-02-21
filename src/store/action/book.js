export const listBook= () => (dispatch) =>{
    fetch('http://localhost:8585/api/book/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_BOOK',payload: data}) )
}
