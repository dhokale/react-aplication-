import React from 'react';
class Form extends React.Component{
    state={
        firstName: '',
        lastName: '',
        email: '',
        mobNo : '',
        jender : '',
        dob : '',
        hobi : ''
    };
submit=()=>{
    this.setState(
{firstName: document.getElementById("firstname").value ,
lastName : document.getElementById("lastname").value ,
email : document.getElementById("email").value ,
mobNo : document.getElementById("mobno").value ,
jender : document.querySelectorAll('[name="jender"]').value  ,
hobi: document.querySelectorAll('[name="hobi"]').value ,
dob: document.getElementById("dob").value
}
    );
    let tr=document.createElement("tr");
let td1=document.createElement("td");
td1.appendChild( this.state.firstName)    
let td2=document.createElement("td").appendChild(this.state.lastName);
let td3= document.createElement("td").appendChild(this.state.email);
let td4= document.createElement("td").appendChild(this.state.mobNo );
let td5=document.createElement("td").appendChild(this.state.jender);
let td6= document.createElement("td").appendChild(this.state.hobi );
let td7 =document.createElement("td").appendChild(this.state.dob );
tr.appendChild(td1,td2,td3,td4,td5,td6,td7);
var tbody=document.getElementById("tbody").appendChild(tr);
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
<input type="radio" id="male" name="gender" value="male"/><br/>
<label htmlFor="female">Female</label>
<input type="radio" id="female" name="gender" value="female"/>
<p> select your hobi </p>
<label htmlFor="playingcricket">playing  cricket </label>
<input type="checkbox" id="playingcricket" name="hobi" value="playing  cricket "/><br/><br/>
<label htmlFor="singing">Singing</label>
<input type="checkbox" id="singing" name="hobi" value="Singing"/><br/><br/>
<lable htmlFor="dob">date of berth </lable>
<input id='dob' type="date" aria-required="true"name="date of berth "/>
               <button type="button"onClick={this.submit}> submit</button>
                </form>
                <table>
                    
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
                        <tbody id='tbody'>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Form;