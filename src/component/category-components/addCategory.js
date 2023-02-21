import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";


export class AddCategory extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            category:{
                categoryName: '',
                book: ''
            },
            errors: {},
            msg: '',
            books:[]
        };
      }

    componentDidMount(){
        //fetch all departments: call action
        //this.props.listDepartment();
    }  

    render(){
        return(
            <div>
            <div className="card">
              <h5 className="card-header">Add Category</h5>
              <div className="card-body">
                <h5 className="card-title">Enter Category Info: </h5>
                <p className="card-text">
                <span>{this.state.msg}</span> <br />
                   <label>Category Name: </label>
                   <input type="text" 
                            name="categoryName"
                            value={this.state.category.categoryName}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['categoryName']}</span>
                    <br /><br />
                     <label>Book </label>
                    <input type="text" 
                            name="book"
                            value={this.state.category.book}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['book']}</span>
                    <br /><br />
                    
                    <button onClick={this.onAdd} className="btn btn-primary">Add Category</button>
                </p>
                 
              </div>
            </div>
          </div>
        );
    }

    changeHandler= (event) =>{
        this.setState({
            category: {
                ...this.state.category, 
                [event.target.name] : event.target.value
            }
        });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.category);
        /* Call the API */
       this.postCategory(this.state.category);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

handleValidation(){
    let categoryName = this.state.category.categoryName;
    let book = this.state.category.book;
   
     
    let tempErrors={}
    let formValid = true; 

    if(!categoryName){ //If name is not given
        formValid = false;
        tempErrors['categoryName']='Category Name cannot be empty';
    }
   
    if(!book){ //If name is not given
        formValid = false;
        tempErrors['book']='Please select Book Name';
    }
    
    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postCategory(e){
    let cat = {
        categoryName: e.categoryName,
        book: e.book
        
    }
    try {
        const response = axios.post("http://localhost:8585/api/category/add",cat);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: data.msg
        })
        this.props.addCategory(data);
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

export default connect(mapStateToProps, {})(AddCategory); 