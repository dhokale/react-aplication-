import React from 'react';
class User extends React.Component{
    constructor( props){
        super(props);
        this.state={
            name: ''  };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
            this.setState({name: event.target.value});  
    }
            handleSubmit(event) {
      <h1>      your name is {this.state.name}  </h1>
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <h1> hello { this.state.name}</h1>
               <form onSubmit={this.handleSubmit}>        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
                </div>
        )
    }
}
export default User;