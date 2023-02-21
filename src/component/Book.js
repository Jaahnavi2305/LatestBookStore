import { Component } from "react";
import { connect } from "react-redux";

import BookList from "./book-components/bookList";





export class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            componentNum: 0
        };
    }

    componentDidMount() {
        //this.props.listBook();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className=" list-group-item"> <button className="list-group-item book-sidebar" onClick={() => {
                                this.setState({ componentNum: 1 })
                            }} > Show all Books </button> </li>
                            {/* <li className="list-group-item">
                                <button className=" list-group-item book-sidebar"
                                    onClick={() => (this.setState({ componentNum: 2 }))}>
                                    Add Author</button></li>
                            <li className="list-group-item">
                                <button className=" list-group-item book-sidebar"
                                    onClick={() => (this.setState({ componentNum: 3 }))}>
                                    Add Category</button></li>
                            <li className="list-group-item">
                                <button className=" list-group-item book-sidebar"
                                    onClick={() => (this.setState({ componentNum: 4 }))}>
                                    Add Publisher</button></li>
                            <li className="list-group-item">
                                <button className=" list-group-item book-sidebar"
                                    onClick={() => (this.setState({ componentNum: 5 }))}>
                                    Add Book</button></li> */}
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        {this.state.componentNum === 1 ?
                            <BookList /> : this.props.book}
                    </div>
                </div>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        
    }
}
export default connect(mapStateToProps, {})(Book);

