import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
//import {listBook} from '../../store/action/book';

export class AddPublisher extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            publisher:{
                name: '',
                bookname: '',
                price: 0,  
                bookID:'', 
                username: '',
                password: '',
                role: 'PUBLISHER'  
            },
            errors: {},
            msg: '',
            books:[]
        };
      }

    componentDidMount(){
        //fetch all books: call action
        //this.props.listPublisher();
    }  

    render(){
        return(
            <div>
            <div className="card">
              <h5 className="card-header">Add Publisher</h5>
              <div className="card-body">
                <h5 className="card-title">Enter Publisher Info: </h5>
                <p className="card-text">
                <span>{this.state.msg}</span> <br />
                   <label>Name: </label>
                   <input type="text" 
                            name="name"
                            value={this.state.publisher.name}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                    <br /><br />
                    <label>Bookname: </label>
                    <input type="text" 
                            name="bookname"
                            value={this.state.publisher.bookname}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['bookname']}</span>
                    <br /><br />
                    <label>Price: </label>
                    <input type="number" 
                            name="price"
                            value={this.state.publisher.price}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['price']}</span>
                    <br /><br />
                    
                    <label>bookID: </label>
                    <input type="number" 
                            name="bookID"
                            value={this.state.publisher.bookID}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['bookID']}</span>
                    <br /><br />
                    <label>Username: </label>
                    <input type="text" 
                            name="username"
                            value={this.state.publisher.username}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['username']}</span>
                            <br /><br />
                    <label>Password: </label>
                    <input type="password" 
                            name="password"
                            value={this.state.publisher.password}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
                            <br /><br />
                    <button onClick={this.onAdd} className="btn btn-primary">Add Publisher</button>
                </p>
                 
              </div>
            </div>
          </div>
        );
    }

    changeHandler= (event) =>{
        this.setState({
            publisher: {
                ...this.state.publisher, 
                [event.target.name] : event.target.value
            }
        });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.publisher);
        /* Call the API */
       this.postPublisher(this.state.publisher);
       console.log(this.state.publisher, "data");
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

handleValidation(){
    let name = this.state.publisher.name;
    let bookname = this.state.publisher.bookname;
    let price = this.state.publisher.price;
    let bookID = this.state.publisher.bookID;
    let username = this.state.publisher.username;
    let password = this.state.publisher.password;
     
    let tempErrors={}
    let formValid = true; 

    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='Publisher Name cannot be empty';
    }
    if(!bookname){ //If name is not given
        formValid = false;
        tempErrors['bookname']='bookname cannot be empty';
    }
    if(!price){ //If name is not given
        formValid = false;
        tempErrors['price']='book price cannot be empty';
    }

    if(!bookID){ //If name is not given
        formValid = false;
        tempErrors['bookID']='bookID cannot be empty';
    }
    
    if(!username){ //If name is not given
        formValid = false;
        tempErrors['username']='Please enter username';
    }
    if(!password){ //If name is not given
        formValid = false;
        tempErrors['password']='Please enter password';
    }
    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postPublisher(e){
    let emp = {
        name: e.name,
        bookname: e.bookname,
        price: e.price,
        user: {
            username: e.username,
            password: e.password,
            role: 'PUBLISHER'
        }       
    }
    try {
        const response = axios.post("http://localhost:8585/api/publisher/add/"+e.bookID, emp);
        
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: 'Succesfully Added'
        })
        this.props.addPublisher(data);
      } catch (error) {
        this.setState({
            msg: ' '
        })
      }
}
}


function mapStateToProps(state){
    return {
    }    
}

export default connect(mapStateToProps, {})(AddPublisher); 