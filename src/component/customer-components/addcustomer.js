import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";


export class AddCustomer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customer: {
                name: '',
                gender: '',

            

            },
            errors: {},
            msg: '',
        
        };
    }

    componentDidMount() {
        //fetch all reviews: call action
        //this.props.listReview();
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">Add Customer</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Customer Details: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Name: </label>
                            <input type="text"
                                name="name"
                                value={this.state.customer.name}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
                            <br /><br />
                            {/* <label> Book: </label>
                            <input type="text"
                                name="book"
                                value={this.state.book}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['book']}</span>
                            <br /><br /> */}

                            <label>Select Gender: </label>
                            <select name="gender"
                             value={this.state.customer.gender}
                              onChange={this.changeHandler} >
                                 <option key={0} value="">--Select Gender--</option>
                                  <option key={1} value="MALE">MALE</option>
                                   <option key={2} value="FEMALE">FEMALE</option>
                                    </select>
                                     <span style={{ color : 'red'}}>
                                        {this.state.errors['gender']}
                                        </span>
                                         <br /><br />

                            <button onClick={this.onAdd} className="btn btn-primary">Add Customer</button>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value
            }
        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.customer);
            /* Call the API */
            this.postCustomer(this.state.customer);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation() {
        let name = this.state.customer.name;
       //let book = this.state.customer.book;
        let gender = this.state.customer.gender;


        let tempErrors = {}
        let formValid = true;

        if (!name) { //If bookName is not given
            formValid = false;
            tempErrors['name'] = 'Name cannot be empty';
        }
        // if (!book) { //If comments are not given
        //     formValid = false;
        //     tempErrors['book'] = ' Book cannot be empty';
        // }
        if (!gender) { //If rating is not given
            formValid = false;
            tempErrors['gender'] = ' Select the Gender';
        }

        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postCustomer(e) {
        let customer = {
            name: e.name,
            gender: e.gender,

        }
        try {
            const response = axios.post("http://localhost:8585/api/customer/add/", customer);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: data.msg
            })
            this.props.addcustomer(data);
        } catch (error) {
           console.error(error.response.data.msg);
            this.setState({
                msg: 'Operation Failed'
            })
        }
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {})(AddCustomer); 