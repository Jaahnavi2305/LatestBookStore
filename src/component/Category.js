import { Component } from "react";
import { connect } from "react-redux";
 
import { AddCategory } from "./category-components/addCategory";

import CategoryList from "./category-components/categoryList";


export class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  componentDidMount(){
    // this.props.listCategory();
  }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item category-sidebar" onClick={()=>(
                this.setState({componentNum : 1})
               )} > Show all Categories </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item category-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Category</button></li>
                   {/* <li className="list-group-item">
                <button  className=" list-group-item category-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Delete Category</button></li> */}
                   
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <CategoryList />:this.state.componentNum === 2?
                  <AddCategory />:this.props.category}
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
export default connect(mapStateToProps, {AddCategory})(Category); 

 