import { Component } from "react";
import { connect } from "react-redux";
import { listPublisher } from "../../store/action/publisher";
export class PublisherList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listPublisher();
      }

      render(){
        return(
            <table className="table table-info table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Bookname</th>
                <th scope="col">Price</th>
            
              </tr>
            </thead>
            <tbody className="table-secondary">
              {
                this.props.publisherList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index + 1}</th>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.bookname}</td>
                    <td>{e.price}</td>
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      publisherList: state.publisher
    }; 
  }
  
  export default connect(mapStateToProps, {listPublisher})(PublisherList);