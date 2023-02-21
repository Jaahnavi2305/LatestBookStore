
import { Component } from "react";
import { connect } from "react-redux";
import { listAuthor } from "../../store/action/author";

export class AuthorList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listAuthor();
      }

      render(){
        return(
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col">book</th>
                {/* <th scope="col">Gender</th>
                */}
              </tr>
            </thead>
            <tbody>
              {
                this.props.authorList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index +1}</th>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
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
      authorList: state.author
    }; 
  }
  
  export default connect(mapStateToProps, {listAuthor})(AuthorList);