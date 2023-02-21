// import React, { useState, useEffect } from "react";

// const Products = () => {

//     const [data, setData] = useState([]);
//     const [filter, setFilter] = useState(data);
//     const [loading, setLoading] = useState(false);

//     // const imgList = [book1,book2]

//     let componentdidMount = true;

//     useEffect(() => {
//         const getProducts = async () => {
//             setLoading(true);
//             const response = await fetch("http://localhost:8585/api/book/getall");
//             if (componentdidMount) {
//                 setData(await response.clone().json());
//                 setFilter(await response.json());
//                 setLoading(false);
//                 console.log(filter);
//             }

//             return () => {
//                 componentdidMount = false;
//             }
//         }

//         getProducts();
//     }, []);


//     const Loading = () => {
//         return <>Loading....</>;
//     };
//     const ShowProducts = () => {
//         return (
//             <>
//                 <div className="buttons d-flex justify-content-center mb-5 pb-5">
//                     <button className="btn btn-outline-dark me-2">All</button>
//                     <button className="btn btn-outline-dark me-2">Kid's section</button>
//                     <button className="btn btn-outline-dark me-2">All Time Favourite</button>
//                     <button className="btn btn-outline-dark me-2">BedTime Stories</button>
//                 </div>
//                 {filter.map((product) => {
//                     return (
//                         <>
//                             <div className="col-md-3">
//                                 <div class="card">
//                                     <img src={product.image} class="card-img-top" alt={product.title} />
//                                     <div class="card-body">
//                                         <h5 class="card-title">{product.title}</h5>
//                                         <p class="card-text">Rs.{product.price}</p>
//                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })}
//             </>
//         );

//     };
//     return (
//         <div>
//             <div className="container my-5 py-5">
//                 <div className="row">
//                     <div className="col-12 mb-5">
//                         <h1 className="display-6 fw-bolder 
//                     text-center">Most Popular</h1>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {loading ? <Loading /> : <ShowProducts />}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Products;




