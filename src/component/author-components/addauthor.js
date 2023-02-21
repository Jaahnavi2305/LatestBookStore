import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";


export class AddAuthor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            author: {
                name: '',
                book: '',
                

            

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
                    <h5 className="card-header">Add Author</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Author Details: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Name: </label>
                            <input type="text"
                                name="name"
                                value={this.state.author.name}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
                            <br /><br />
                            <label> Book: </label>
                            <input type="text"
                                name="book"
                                value={this.state.book}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['book']}</span>
                            <br /><br />

                            {/* <label>Select Gender: </label>
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
                                         <br /><br /> */}

                            <button onClick={this.onAdd} className="btn btn-primary">Add Author</button>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            author: {
                ...this.state.author,
                [event.target.name]: event.target.value
            }
        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.author);
            /* Call the API */
            this.postAuthor(this.state.author);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation() {
        let name = this.state.author.name;
       let book = this.state.author.book;
        // let gender = this.state.customer.gender;


        let tempErrors = {}
        let formValid = true;

        if (!name) { //If bookName is not given
            formValid = false;
            tempErrors['name'] = 'Name cannot be empty';
        }
        if (!book) { //If comments are not given
            formValid = false;
            tempErrors['book'] = ' Book cannot be empty';
        }
        // if (!gender) { //If rating is not given
        //     formValid = false;
        //     tempErrors['gender'] = ' Select the Gender';
        // }

        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postAuthor(e) {
        let author = {
            name: e.name,
            book: e.book,
            // gender: e.gender,

        }
        try {
            const response = axios.post("http://localhost:8585/api/author/add", author);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: data.msg
            })
            this.props.addauthor(data);
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

export default connect(mapStateToProps, {})(AddAuthor); 