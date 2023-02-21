export const listAuthor= () => (dispatch) =>{
    fetch('http://localhost:8585/api/author/getall')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_AUTHOR',payload: data}) )
}


//     export  const  addCustomer = (data) => {
     
//         return {
//             type: 'ADD_CUSTOMER',
//             payload: data
//         }
// }

