
import React from 'react';
class Table extends React.Component{    
state={
name:"tekvision",
name1: "madhav",
name2: 'gaurav',
name3: 'anand'
};
clickMe=()=>{
this.setState(
{ name: <input type="text"placeholder={this.state.name} id='name'/>  }
);
}
clickMe1=()=>{
    if(document.getElementById("name").value==""){
        alert( "edit fealde is blank ");
   return false;
    }
this.setState(
{ name: document.getElementById("name").value} 
);
}
edit1=()=>{
    this.setState(
    { name1: <input type="text"placeholder={this.state.name1} id='name1'/>  }
    );
    }
    submit1=()=>{
        if(document.getElementById("name1").value==""){
            alert( "edit fealde is blank ");
       return false;
        }
        this.setState(
        { name1: document.getElementById("name1").value} 
        );
        
        }
        edit2=()=>{
            this.setState(
            { name2: <input type="text"placeholder={this.state.name2} id='name2'/>  }
            );
            }
            submit2=()=>{
                if(document.getElementById("name2").value==""){
                    alert( "edit fealde is blank ");
               return false;
                }
                this.setState(
                { name2: document.getElementById("name2").value} 
                );
                }
                edit3=()=>{
                    this.setState(
                    { name3: <input type="text"placeholder={this.state.name3} id='name3'/>  }
                    );
                    }
                    submit3=()=>{
                        if(document.getElementById("name3").value==""){
                            alert( "edit fealde is blank ");
                       return false;
                        }
                        this.setState(
                        { name3: document.getElementById("name3").value} 
                        );
                        }
render(){
return(
<div>
<table>
<caption> welcom to first state program </caption>
<tr>
<th> "name"</th>
<th> "edit feeld </th>
<th> " submit button" </th>
</tr>
<tr>
<td>{ this.state.name }</td>
<td> <button type="button" onClick={this.clickMe}> edit    </button> </td>
<td> <button type="button" onClick={this.clickMe1}> submit</button> </td>
</tr>
<tr>
<td>{ this.state.name1}</td>
<td> <button type="button" onClick={this.edit1}> edit    </button> </td>
<td> <button type="button" onClick={this.submit1}> submit</button> </td>
</tr>
<tr>
<td>{ this.state.name2 }</td>
<td> <button type="button" onClick={this.edit2}> edit    </button> </td>
<td> <button type="button" onClick={this.submit2}> submit</button> </td>
</tr>
<tr>
<td>{ this.state.name3 }</td>
<td> <button type="button" onClick={this.edit3}> edit    </button> </td>
<td> <button type="button" onClick={this.submit3}> submit</button> </td>
</tr>
</table>
</div>
);
}
}
export default Table;