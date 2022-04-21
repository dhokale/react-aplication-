import React from 'react';
class Form extends React.Component{
 constructor( props){
     super(props);
    this.state={
        firstName: null,
        lastName: null,
        email: null,
        mobNo : null,
        jender : null,
        dob : null,
        hobbies :'empty',
        counter: 0, 
        map: [],
        counter1: 0
    };
    this.first= React.createRef();
    this.last= React.createRef();
    this.email= React.createRef();
    this.phone= React.createRef();
    this.dob=React.createRef();
    this.callRef = React.createRef();
    this.male=React.createRef();  
}
  
edit=()=>{
    for(var i=0;i<this.state.map.length;i++){
alert(this.state.map[i])
}
   //const node= this.callRef.current.value;
    
}
checkbox=(event)=>{
var inputs = document.querySelectorAll('.pl');
var select=[]; 
for(var i=0;i<inputs.length;i++){
    if(inputs[i].checked==true){
        select.push(inputs[i].value,);
        }
        
}
this.setState({ hobbies: select})
this.setState({counter: this.state.counter+1})
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
        alert("last name  is blank");
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
alert("at is inVelede  position ")
this.email.current.focus(); 
return false;
    }
    else if((this.email.current.value.charAt(this.email.current.value.length-4)!='.') && (this.email.current.value.charAt(this.email.current.value.length-3)!='.')){
        alert(" . is invalid  position  ")
        this.email.current.focus(); 
        return false;
    }
else if((this.phone.current.value.length < 9  )||(this.phone.current.value.length>10)){
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
    alert("please  select your jender ")
    this.male.current.focus(); 
    return false;
}

    this.setState(
{firstName: this.first.current.value,
lastName : this.last.current.value,
email : this.email.current.value,
mobNo :this.phone.current.value ,
dob: this.dob.current.value,
counter1: this.state.counter 
} , ()=>{
this.setState(
    {map: this.state.map.concat([<tr>
        <td>{this.state.firstName} </td>
        <td>  {this.state.lastName}</td>
        <td>{ this.state.email} </td>
        <td>{this.state.mobNo} </td>
        <td>{this.state.jender}</td>
        <td>{this.state.hobbies}</td>
        <td>{this.state.dob}</td>
        <td> <button ref={this.callRef} onClick={this.edit}> edit</button></td>
    <td><button > delete</button> </td>
        </tr>]) 
    }
)    
});

document.getElementById('myform').reset();
if(this.state.counter1==this.state.counter){
    this.setState({hobbies:'empty'})
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
<label htmlFor="playingcricket">playing  cricket </label>
<input type="checkbox"className="pl" id="playingcricket" name="hobi"value="playing cricket,"onChange={this.checkbox}/><br/><br/>
<label htmlFor="singing">Singing</label>
<input type="checkbox"className="pl" id="singing" name="hobi" value="Singing" onChange={this.checkbox}/><br/><br/>
<label htmlFor="dob">date of berth </label>
<input id='dob' type="date" aria-required="true"name="date of berth "min="1974-01-01" max="2022-01-01"ref={this.dob}/>
               <button type="button"onClick={ this.submitMap}> submit</button>
               <br/>
               <input type="reset" value="Reset" /> 
                </form>
                <table id='mytable'>
                    
                        <thead>
                            <tr>
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
                        {
                            this.state.map
                        }
                            
</tbody>                   
                </table>
            </div>
        )
    }
}
export default Form;    