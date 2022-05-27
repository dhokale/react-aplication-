import React from 'react';
import * as ReactDOM from 'react-dom';
class Form extends React.Component{
      constructor( props){
    super(props);
    this.firstname=''
    this.lastname=''
    this.email=''
    this.phone=''
        
    this.people=[];
    this.state={
    jender : null,  
    birthdate: null,
    hobbies :'na-',
    counter: 0,
    editRowIndex:null,
    counter1: 0
    };
    
    this.first= React.createRef();
    this.last= React.createRef();
    this.emailRef= React.createRef()
    this.phoneRef= React.createRef();
    this.dobRef=React.createRef();
    this.male=React.createRef();
    }
    
    saveUser = (index) => {
      
        let person={firstname:this.firstname,lastname: this.lastname,email:this.email,
phone:this.phone ,jender:this.state.jender,hobbies:this.state.hobbies,dob:this.state.birthdate}      

      this.people[index]=person      
  
      return(e)=>{ this.setState({editRowIndex:null})}     
    };
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
    <td><input id='firstedit' type="text"name='first' aria-label="First" placeholder={person.firstname}  ref={this.first}onChange={this.firstFunction} /></td>
    <td><input id='lastedit'  type="text"name='last' aria-label="Last Name" placeholder={person.lastname}   ref={this.last} onChange={this.lastFunction} /></td>
    <td><input id='emailedit'  type="text"name='email' placeholder={person.email} aria-label="email"ref={this.email} onChange={this.emailFunction} /></td>
    <td><input   id='phoneedit'  type="number"name='phone' aria-label="mobolNo" placeholder={person.phone} ref={this.phone}onChange={this.phoneFunction} /></td>
    <td><label htmlFor="Male">Male</label>
    <input type="radio" id="Male" name="gender" aria-required="true" value="male" ref={this.male} onChange={this.radio} /><br/>
    <label htmlFor="Other">Other</label>
    <input type="radio" id="Other" name="gender" aria-required="true" value="other"onChange={this.radio}/><br/>
    <label htmlFor="Female">Female</label>
    <input type="radio" id="Female" name="gender" aria-required="true" value="female"onChange={this.radio}/></td>
    <td><p>select your hobbies</p> <label htmlFor="Playingcricket">playing cricket </label>
    <input type="checkbox"className="pl" id="Playingcricket" name="hobi"value="playing cricket,"onClick={this.checkbox}/><br/><br/>
    <label htmlFor="Singing">singing</label>
    <input type="checkbox"className="pl" id="Singing" name="hobi" value="Singing" onClick={this.checkbox}/><br/><br/></td>
    <td> <input id='doB' type="date" aria-required="true"name="date of berth "min="1974-01-01" max="2022-01-01"ref={this.dob}onChange={this.birthdateFunction}/></td>
    <td>
    <button onClick={ this.saveUser(index)}>Save</button>
    </td>
   <td> <button>delete</button></td>
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
    firstFunction=(event)=>{
      this.firstname=event.target.value
    }
    lastFunction=(event)=>{
      this.lastname=event.target.value
    }
    emailFunction=(event)=>{
      this.email = event.target.value
    }
    phoneFunction=(event)=>{
      this.phone=event.target.value
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
    birthdateFunction=(event)=>{
      this.setState({birthdate: event.target.value})
      }
    
    submitMap=(event)=>{
      
    var letters = [1-0];
    if(this.firstname ===""){
    alert("firstName is blank ")
    this.first.current.focus();
    return false;
    }
    else if(this.firstname===letters||!isNaN(this.firstname)){
    alert("**Please fill the firstname only character not a number")
    this.first.current.focus();
    return false;
    }
    else if(this.lastname===""){
    alert("last name is blank");
    this.last.current.focus();
    return false
    }
    else if(this.lastname===letters||!isNaN(this.lastname)){
    alert("Please fill the lastname only character not a number")
    this.last.current.focus();
    return false;
    }
    else if(this.email===""){
    alert("email is blank ");
    this.emailRef.current.focus();
    return false
    }
    else if(this.email.indexOf('@')<=0){
    alert("at is inVelede position ")
    this.emailRef.current.focus();
    return false;
    }
    else if((this.email.charAt(this.email.length-4)!='.') && (this.email.charAt(this.email.length-3)!='.')){
    alert(" . is invalid position ")
    this.emailRef.current.focus();
    return false;
    }
    else if((this.phone.length < 9 )||(this.phone.length>10)){
    alert("mobile number is blank or mobile number should be 10 digit" )
    this.phoneRef.current.focus();
    return false;
    }
    else if(this.birthdate==""){
    alert("date of birth is MT")
    this.dobRef.current.focus();
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
    let person={firstname:this.firstname,lastname: this.lastname,email:this.email,
      phone:this.phone ,jender:this.state.jender,hobbies:this.state.hobbies,dob:this.state.birthdate}                
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
    <input id="firstname" name="firstname"type="text" aria-required="true"ref={this.first} onChange={this.firstFunction}/><br/>
    </label>
    <label>
    lastName:
    <input id="lastname" name="lastname" type="text" aria-required="true"ref={this.last} onChange={this.lastFunction}/><br/>
    </label>
    <label>
    email:
    <input id="email" name="email" type="email" aria-required="true"ref={this.emailRef}onChange={this.emailFunction}/><br/>
    </label>
    <label>
    mobNo:
    <input id="mobno" name="mobno" type="number" aria-required="true"ref={this.phoneRef} onChange={this.phoneFunction}/><br/>
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
    <input id='dob' type="date" aria-required="true"name="date of berth "min="1974-01-01" max="2022-01-01"ref={this.dobRef} onChange={this.birthdateFunction}/>
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