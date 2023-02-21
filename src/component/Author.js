import { Component } from "react";
import { connect } from "react-redux";
import Login from "./auth/login";
 
import  { AddAuthor } from "./author-components/addauthor";

import AuthorList from "./author-components/authorList";

export  class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0 ,
      isLoggedIn: false
    };
  }
 
   componentDidMount(){
  //  this.props.listCustomer();
  let username = localStorage.getItem('username');

  if(username === null || username === undefined) 
        this.setState({isLoggedIn: false})
  else
        this.setState({isLoggedIn: true})
   }
  render() { 
    return (
      !this.state.isLoggedIn?<div ><Login /></div>  :
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> 
              <button   className="list-group-item author-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Author </button> </li>
              
                   <li className="list-group-item">
                <button  className=" list-group-item author-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Author</button></li>
              
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <AuthorList />:this.state.componentNum === 2?
                  <Author />:<AddAuthor author={this.props.author} />}
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      
  }    
}
export default connect(mapStateToProps, {AddAuthor})(Author); 
