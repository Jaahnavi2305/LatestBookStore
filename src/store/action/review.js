export const listReview= () => (dispatch) =>{
    fetch('http://localhost:8585/api/review/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_REVIEW',payload: data}) )
}