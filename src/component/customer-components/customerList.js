
import { Component } from "react";
import { connect } from "react-redux";
import { listCustomer } from "../../store/action/customer";
export class CustomerList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listCustomer();
      }

      render(){
        return(
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col">Gender</th>
               
              </tr>
            </thead>
            <tbody>
              {
                this.props.customerList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index +1}</th>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.gender}</td>
                    
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      customerList: state.customer
    }; 
  }
  
  export default connect(mapStateToProps, {listCustomer})(CustomerList);