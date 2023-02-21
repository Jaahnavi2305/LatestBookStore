import { Component } from "react";
import { connect } from "react-redux";
import { listReview } from "../../store/action/review";
export class ReviewList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listReview();
      }

      render(){
        return(
            <table className="table table-info table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">bookName</th>
                <th scope="col">Comments</th>
                <th scope="col">Rating</th>
               
              </tr>
            </thead>
            <tbody className="table-secondary">
              {
                this.props.reviewList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index +1}</th>
                    <td>{e.id}</td>
                    <td>{e.bookName}</td>
                    <td>{e.comments}</td>
                    <td>{e.rating}</td>
                    
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      reviewList: state.review
    }; 
  }
  
  export default connect(mapStateToProps, {listReview})(ReviewList);