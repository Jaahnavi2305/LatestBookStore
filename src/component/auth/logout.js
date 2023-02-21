import { Component } from "react"


export default class  Logout extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){
        localStorage.clear();
        
    }

    render(){
        return(
            <button onClick={this.componentDidMount}></button>
        )
    }
}
