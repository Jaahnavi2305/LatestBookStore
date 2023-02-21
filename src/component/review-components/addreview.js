import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";


export class AddReview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            review: {
                bookName: '',
                comments: '',
                rating: 0,

                

            },
            errors: {},
            msg: '',
            // books: []
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
                    <h5 className="card-header">Add Review</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Review: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>bookName: </label>
                            <input type="text"
                                name="bookName"
                                value={this.state.bookName}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['bookName']}</span>
                            <br /><br />
                            <label> Comments: </label>
                            <input type="text"
                                name="comments"
                                value={this.state.comments}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['comments']}</span>
                            <br /><br />
                            <label> Rating: </label>
                            <input type="range"
                            min='0' max='5'
                                name="rating"
                                value={this.state.rating}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['rating']}</span>
                            <br /><br />
                            

                            <button onClick={this.onAdd} className="btn btn-primary">Add Review</button>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            review: {
                ...this.state.review,
                [event.target.name]: event.target.value
            }
        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.review);
            /* Call the API */
            this.postReview(this.state.review);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation() {
        let bookName = this.state.review.bookName;
        let comments = this.state.review.comments;
        let rating = this.state.review.rating;


        let tempErrors = {}
        let formValid = true;

        if (!bookName) { //If bookName is not given
            formValid = false;
            tempErrors['bookName'] = 'bookName cannot be empty';
        }
        if (!comments) { //If comments are not given
            formValid = false;
            tempErrors['comments'] = ' Comments cannot be empty';
        }
        if (!rating) { //If rating is not given
            formValid = false;
            tempErrors['rating'] = ' please update the Rating';
        }

        this.setState({
            errors: tempErrors
        });

        return formValid;
    }

    async postReview(e) {
        let review = {
            bookName: e.bookName,
            comments: e.comments,
            rating: e.rating,

        }
        try {
            const response = axios.post("http://localhost:8585/api/review/add/", review);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: data.msg
            })
            this.props.addreview(data);
        } catch (error) {
            console.error(error.response.data.msg);
            this.setState({
                msg: 'operation failed'
            })
        }
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {})(AddReview); 