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
        hobbies :null       
    };
}
check=(event)=>{
    this.setState(
        { hobbies : event.target.value}
    );
}
radio=(event)=>{
    this.setState(
        { jender : event.target.value}
    );
}
submit=()=>{
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
}
render(){
        return(
            <div>
                <h1>Fill the following Registration Form</h1>
                <form>
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
<input type="radio" id="male" name="gender" value="male"onChange={this.radio}/><br/>
<label htmlFor="female">Female</label>
<input type="radio" id="female" name="gender" value="female"onChange={this.radio}/>
<p> select your hobbies </p>
<label htmlFor="playingcricket">playing  cricket </label>
<input type="checkbox" id="playingcricket" name="hobi" value="playing  cricket "onClick={this.check}/><br/><br/>
<label htmlFor="singing">Singing</label>
<input type="checkbox" id="singing" name="hobi" value="Singing"onClick={this.check}/><br/><br/>
<lable htmlFor="dob">date of berth </lable>
<input id='dob' type="date" aria-required="true"name="date of berth "/>
               <button type="button"onClick={this.submit}> submit</button>
                </form>
                <table id='mytable'>
                    
                        <thead>
                            <tr>
                                <th> firstName</th>
                                <th> lastName</th>
                                <th> email</th>
<th> mobNo</th>
<th>jender</th>
<th>hobi</th>
<th>date of berth </th>
                            </tr>
                        </thead>
                    
                
                </table>
            </div>
        )
    }
}
export default Form;