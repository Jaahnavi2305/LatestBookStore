import { Component } from "react";
import Category from "./component/Category";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Publisher from "./component/Publisher";
import { Login } from "./component/auth/login";
import Logout from "./component/auth/logout";
import SignUp from "./component/SignUp";
import Customer from "./component/Customer";
import Review from "./component/review";
import Author from "./component/Author";
import Book from "./component/Book";


export default class App extends Component{
 
  
  render(){  
    return(
        <div>
          <Provider store={store}> 
          <Navbar />
          
            <Routes>
            <Route path="/" element={ <Home />} /> 
            <Route path="/category" element={ <Category />} /> 
            {/* <Route path="/login" element={ <Login />} />  */}
          <Route path="/logout" element={ <Logout />} />
          <Route path="/publisher" element={ <Publisher />} /> 
          <Route path="/signup" element={ <SignUp />} /> 
          <Route path="/customer" element={ <Customer />} /> 
          <Route path="/author" element={ <Author />} /> 
          <Route path="/review" element={ <Review/>} /> 
          <Route path="/book" element={<Book/>}/>
          
          
             
            
          </Routes>
          </Provider>
        </div>
    );
  }
}
