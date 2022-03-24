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
        hobbies :[] 
    };
}
update=(event)=>{
var inputs = document.querySelectorAll('.pl');
var select=[]; 
for(var i=0;i<inputs.length;i++){
 
    if(inputs[i].checked==true){
        select.push(inputs[i].value);
        }
        
}
this.setState({ hobbies: select})
}
radio=(event)=>{
    this.setState(
        { jender : event.target.value}
    );
}
submit=()=>{
    var mn= document.getElementById("mobno").value ;
    var firstname=document.getElementById("firstname").value;
    var letters = [1-0];
var lastname= document.getElementById("lastname").value;
var email=document.getElementById("email").value;
    if(firstname ==""){
        alert("firstName is blank ")
        document.getElementById("firstname").focus(); 
        return false;
    }
    else if(firstname.match( letters)||!isNaN(firstname)){
        alert("**Please fill the firstname only character not a number")
        document.getElementById("firstname").focus()
    return false;       
} 
  else if(lastname=="" ){
        alert("last name  is blank");
        document.getElementById("lastname").focus();
        return false
    }
    else if(lastname.match(letters)||!isNaN(lastname)){
alert("Please fill the lastname only character not a number")
document.getElementById("lastname").focus();
return false;   
}
    else if(email ==""){
        alert("email is blank ");
        document.getElementById("email").focus();
        return false
    }
    else if(email.indexOf('@')<=0){
alert("@ is invalid position");
document.getElementById("email").focus();
return false;
    }
    else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        alert(" . is invalid  position  ")
        document.getElementById("email").focus();
        return false;
    }
else if((mn.length < 9  )||(mn.length>10)){
    alert("mobile number is blank or mobile number should be 10 digit" )
    document.getElementById("mobno").focus();
    return false;
}
else if(document.getElementById("dob").value ==""){
    alert("date of birth is MT") 
    document.getElementById("dob").focus();
    return false;
}
else if(this.state.jender===null){
    alert("please  select your jender ")
    document.getElementById("male").focus();
    return false;
}
    this.setState(
{firstName: document.getElementById("firstname").value ,
lastName : document.getElementById("lastname").value ,
email : document.getElementById("email").value ,
mobNo : document.getElementById("mobno").value ,
dob: document.getElementById("dob").value
} , ()=>{
var table=document.getElementById("mytable");
var row = table.insertRow();
    var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
    cell1.innerHTML=this.state.firstName ;
    cell2.innerHTML=this.state.lastName ;
    cell3.innerHTML=this.state.email ;
    cell4.innerHTML=this.state.mobNo ;
    cell5.innerHTML=this.state.jender ;
    cell6.innerHTML=this.state.hobbies;
    cell7.innerHTML=this.state.dob ;
 } );  
 document.getElementById('myform').reset(); 
}
render(){
        return(
            <div>
                <h1>Fill the following Registration Form</h1>
                <form id='myform'>
                    <label>
                        firstName:
                        <input id="firstname" name="firstname" type="text" aria-required="true"/><br/><br/><br/>
                    </label>
                    <label>
                        lastName:
                        <input id="lastname" name="lastname" type="text" aria-required="true"/><br/><br/><br/>
                    </label>
                    <label>
                        email:
                        <input id="email" name="email" type="email" aria-required="true"/><br/><br/><br/>
                    </label>
                    <label>
                        mobNo:
                        <input id="mobno" name="mobno" type="number" aria-required="true"/><br/><br/><br/>
                    </label>   
                    <p>Select your gender:*</p>
                 <label htmlFor="male">Male</label>
<input type="radio" id="male" name="gender" aria-required="true" value="male"onChange={this.radio}/><br/>
<label htmlFor="female">Female</label>
<input type="radio" id="female" name="gender" aria-required="true" value="female"onChange={this.radio}/>
<p id="focuss"> select your hobbies </p>
<label htmlFor="playingcricket">playing  cricket </label>
<input type="checkbox"className="pl" id="playingcricket" name="hobi"value="playing  cricket"onChange={this.update}/><br/><br/>
<label htmlFor="singing">Singing</label>
<input type="checkbox"className="pl" id="singing" name="hobi" value="Singing" onChange={this.update}/><br/><br/>
<label htmlFor="dob">date of berth </label>
<input id='dob' type="date" aria-required="true"name="date of berth "min="1974-01-01" max="2022-01-01"/>
               <button type="button"onClick={this.submit}> submit</button>
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
                            </tr>
                        </thead>
                    
                
                </table>
            </div>
        )
    }
}
export default Form;    