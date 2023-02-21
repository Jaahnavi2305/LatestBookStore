import { Component } from "react";
import { connect } from "react-redux";
 
import { AddPublisher} from "./publisher-components/addPublisher";
 //import Book from "./publisher-components/book";
import PublisherList from "./publisher-components/publisherList.js";
 //import { listPublisher } from "../store/action/publisher";
 import Login from "./auth/login";

export  class Publisher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  componentDidMount(){
    //this.props.listPublisher();
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
              <li className=" list-group-item"> <button   className="list-group-item publisher-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Publisher </button> </li>
              {/* <li className="list-group-item">
                <button  className=" list-group-item publisher-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Book</button></li> */}
                   <li className="list-group-item">
                <button  className=" list-group-item publisher-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Publisher</button></li>
              
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <PublisherList />:this.state.componentNum === 2?
                  <AddPublisher/>: this.props.publisher }
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      //dept : state.publisher
  }    
}
export default connect(mapStateToProps,{AddPublisher})(Publisher); 

 