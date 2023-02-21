import React from "react";
import { Component } from "react";



export default class NavBar extends Component {
    constructor() {
      super();
  
      this.state = {};
    }

render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 
            shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">ONLINEBOOKSTORE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/category">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/publisher">Publisher</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/author">Author</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/customer">Customer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/book">Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/review">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
                            
                        </ul>
                            <div className="buttons">
                                <a href="/signup" className="btn btn-outline-dark ms-2">
                                   <i className="fa fa-user-plus me-1"></i> Sign Up</a>
                                
                                   
                            </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}
}
