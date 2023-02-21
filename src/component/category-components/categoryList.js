import { Component } from "react";
import { connect } from "react-redux";
import { listCategory } from "../../store/action/category";

export class CategoryList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listCategory();
      }

      render(){
        return(
            <table className="table table-info table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">categoryName</th>
                <th scope="col">book</th>
              </tr>
            </thead>
            <tbody className="table-secondary">
              {
                this.props.categoryList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index + 1}</th>
                    <td>{e.id}</td>
                    <td>{e.categoryName}</td>
                    <td>{e.book}</td>

                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      categoryList: state.category
    }; 
  }
  
  export default connect(mapStateToProps, {listCategory})(CategoryList);