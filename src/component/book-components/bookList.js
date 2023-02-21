import { Component } from "react";
import { connect } from "react-redux";
import { listBook } from "../../store/action/book";
export class BookList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listBook();
      }

      render(){
        return(
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Publisher</th>
                <th scope="col">Price</th>
                
                
                
              </tr>
            </thead>
            <tbody>
              {
                this.props.bookList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index + 1}</th>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.author.name}</td>
                    <td>{e.category.categoryName}</td>
                    <td>{e.publisher.name}</td>
                    <td>{e.publisher.price}</td>
                   
                    
                    
                    
                    
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      bookList: state.book
    }; 
  }
  
  export default connect(mapStateToProps, {listBook})(BookList);