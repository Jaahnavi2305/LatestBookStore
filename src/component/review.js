import { Component } from "react";
import { connect } from "react-redux";
 
import { AddReview } from "./review-components/addreview";
import ReviewList from "./review-components/reviewList";

export  class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  // componentDidMount(){
  //   this.props.listReview();
  // }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> 
              <button className="list-group-item review-sidebar"
               onClick={()=>{this.setState({componentNum : 1})
              }} > Show all Reviews </button> </li>
              
                   <li className="list-group-item">
                <button  className=" list-group-item review-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Review</button></li>
              
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <ReviewList />:this.state.componentNum === 3?
                  <Review />:<AddReview review={this.props.review} />}
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
export default connect(mapStateToProps, {AddReview})(Review); 
