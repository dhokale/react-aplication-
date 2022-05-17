import React from 'react';
import * as ReactDOM from 'react-dom';
class Form extends React.Component{
      constructor( props){
    super(props);
    this.people=[];
    
    this.state={
    jender : null,
    hobbies :'na-',
    counter: 0,
    editRowIndex:null,
    counter1: 0
    };
    this.first= React.createRef();
    this.last= React.createRef();
    this.email= React.createRef()
    this.phone= React.createRef();
    this.dob=React.createRef();
    this.firstNameEditable= React.createRef();
    this.male=React.createRef(); 
    }
    renderRows=()=>{
      let rows=[];
      this.people.forEach((person, index) => {
           if(this.state.editRowIndex === index) rows.push(this.renderEditableRow(person, index)); else rows.push(this.renderDisplayRow(person, index)); });
return rows;           
}; 
    handleEditClick = (index) => {
  return(e)=>{ this.setState({editRowIndex:index})}     
}
    renderEditableRow = (person, index) => {
    return(
    <tr>
    <td><input type="text" value={person.firstname} aria-label="First Name" ref={this.firstNameEditableField} /></td>
    <td><input type="text" value={person.lastname} aria-label="Last Name" /></td>
    <td><input type="text" value={person.email} aria-label="email" /></td>
    <td><input type="text" value={person.phone} aria-label="mobolNo" /></td>
    <td><label htmlFor="male">Male</label>
    <input type="radio" id="male" name="gender" aria-required="true" value="male" ref={this.male} onChange={this.radio} /><br/>
    <label htmlFor="other">Other</label>
    <input type="radio" id="other" name="gender" aria-required="true" value="other"onChange={this.radio}/><br/>
    <label htmlFor="female">Female</label>
    <input type="radio" id="female" name="gender" aria-required="true" value="female"onChange={this.radio}/></td>
    <td><label htmlFor="playingcricket">playing cricket </label>
    <input type="checkbox"className="pl" id="playingcricket" name="hobi"value="playing cricket,"onClick={this.checkbox}/><br/><br/>
    <label htmlFor="singing">singing</label>
    <input type="checkbox"className="pl" id="singing" name="hobi" value="Singing" onClick={this.checkbox}/><br/><br/></td>
    <td><label htmlFor="dob">date of berth </label>
    <input id='dob' type="date" aria-required="true"name="date of berth " value={person.dob}min="1974-01-01" max="2022-01-01"ref={this.dob}/></td>
    <td>
    <button>Save</button>
    </td>
    <button>delete</button>
    </tr>
    )
    }
    renderDisplayRow = (person, index) => {
    return(
    <tr>
    <td>{person.firstname}</td>
    <td>{person.lastname}</td>
    <td>{person.email}</td>
    <td>{person.phone}</td>
    <td>{person.jender}</td>
    <td>{person.hobbies}</td>
    <td>{person.dob}</td>
    <td>
    <button onClick={this.handleEditClick(index)}>Edit</button>
    </td>
    <td><button>delete</button></td>
    </tr>
    )
    }
    checkbox=(e)=>{
    var inputs = document.querySelectorAll('.pl');
    var select=[];
    for(var i=0;i<inputs.length;i++){
    if(inputs[i].checked==true){
    select.push(inputs[i].value);
    }
    
    }
    this.setState({ hobbies: select,
    counter:this.state.counter+1
    })
    }
    radio=(event)=>{
    this.setState(
    { jender : event.target.value}
    );
    }
    
    submitMap=(event)=>{
    
    var letters = [1-0];
    if(this.first.current.value ===""){
    alert("firstName is blank ")
    this.first.current.focus();
    return false;
    }
    else if(this.first.current.value===letters||!isNaN(this.first.current.value)){
    alert("**Please fill the firstname only character not a number")
    this.first.current.focus();
    return false;
    }
    else if(this.last.current.value===""){
    alert("last name is blank");
    this.last.current.focus();
    return false
    }
    else if(this.last.current.value===letters||!isNaN(this.last.current.value)){
    alert("Please fill the lastname only character not a number")
    this.last.current.focus();
    return false;
    }
    else if(this.email.current.value===""){
    alert("email is blank ");
    this.email.current.focus();
    return false
    }
    else if(this.email.current.value.indexOf('@')<=0){
    alert("at is inVelede position ")
    this.email.current.focus();
    return false;
    }
    else if((this.email.current.value.charAt(this.email.current.value.length-4)!='.') && (this.email.current.value.charAt(this.email.current.value.length-3)!='.')){
    alert(" . is invalid position ")
    this.email.current.focus();
    return false;
    }
    else if((this.phone.current.value.length < 9 )||(this.phone.current.value.length>10)){
    alert("mobile number is blank or mobile number should be 10 digit" )
    this.phone.current.focus();
    return false;
    }
    else if(this.dob.current.value==""){
    alert("date of birth is MT")
    this.dob.current.focus();
    return false;
    }
    else if(this.state.jender===null){
    alert("please select your jender ")
    this.male.current.focus();
    return false;
    }
    
    this.setState(
    {counter1: this.state.counter
    })
    
    let person={firstname:this.first.current.value,lastname:this.last.current.value,email:this.email.current.value,phone:this.phone.current.value ,jender:this.state.jender,hobbies:this.state.hobbies,dob:this.dob.current.value}
    this.people.push(person)
    document.getElementById('myform').reset();
    if(this.state.counter1==this.state.counter||this.state.hobbies==""){
    this.setState({hobbies: 'na'})
    }
    }
    render(){
    
    return(
    <div>
    <h1>Fill the following Registration Form</h1>
    <form id='myform'>
    <label>
    firstName:
    <input id="firstname" name="firstname"type="text" aria-required="true"ref={this.first}/><br/>
    </label>
    <label>
    lastName:
    <input id="lastname" name="lastname" type="text" aria-required="true"ref={this.last}/><br/>
    </label>
    <label>
    email:
    <input id="email" name="email" type="email" aria-required="true"ref={this.email}/><br/>
    </label>
    <label>
    mobNo:
    <input id="mobno" name="mobno" type="number" aria-required="true"ref={this.phone}/><br/>
    </label>
    <p>Select your gender:*</p>
    <label htmlFor="male">Male</label>
    <input type="radio" id="male" name="gender" aria-required="true" value="male" ref={this.male} onChange={this.radio} /><br/>
    <label htmlFor="other">Other</label>
    <input type="radio" id="other" name="gender" aria-required="true" value="other"onChange={this.radio}/><br/>
    <label htmlFor="female">Female</label>
    <input type="radio" id="female" name="gender" aria-required="true" value="female"onChange={this.radio}/>
    <p id="focuss"> select your hobbies </p>
    <label htmlFor="playingcricket">playing cricket </label>
    <input type="checkbox"className="pl" id="playingcricket" name="hobi"value="playing cricket,"onClick={this.checkbox.bind(this)}/><br/><br/>
    <label htmlFor="singing">singing</label>
    <input type="checkbox"className="pl" id="singing" name="hobi" value="Singing" onClick={this.checkbox}/><br/><br/>
    <label htmlFor="dob">date of berth </label>
    <input id='dob' type="date" aria-required="true"name="date of berth "min="1974-01-01" max="2022-01-01"ref={this.dob}/>
    <button type="button"onClick={ this.submitMap}> submit</button>
    <br/>
    <input type="reset" value="Reset" />
    </form>
    <table id='mytable'>
    
    <thead>
    <tr id='first'>
    <th> firstName</th>
    <th> lastName</th>
    <th> email</th>
    <th> mobNo</th>
    <th>jender</th>
    <th>hobbies</th>
    <th>date of berth </th>
    <th> edit</th>
    <th>delete</th>
    </tr>
    </thead>
    <tbody id='tbody'>
   {this.renderRows()}
    </tbody>
    </table>
    </div>
    )
    }
    
    }
    export default Form;