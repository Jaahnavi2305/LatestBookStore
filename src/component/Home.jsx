import React from "react";
import img1 from "../image/bg.jpg";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark text-white border-0">
                <img src={img1} className="card-img" alt="Background"
                height="550px" />
                <div className="card-img-overlay d-flex flex-column 
                justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">ONLINE BOOK STORE</h5>
                    <p className="card-text lead fs-2">Checkout all the trending books</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default Home;