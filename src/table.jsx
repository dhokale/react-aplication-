import React from 'react';
class Table extends React.Component{    
state={
name:"tekvision",
name1: "madhav",
name2: 'gaurav',
name3: 'anand',
ariaValue : true,
ariaValue1: true,
ariaValue2: true,
ariaValue3: true
};
clickMe=()=>{
this.setState(
{ name: <input type="text"placeholder={this.state.name} id='name'/>,
ariaValue : !this.state.ariaValue
  }
);
}
clickMe1=()=>{
    if(document.getElementById("name").value===""){
        alert( "edit fealde is blank ");
   return false;
    }
this.setState(
{ name: document.getElementById("name").value ,
ariaValue : !this.state.ariaValue} 
);
}
delete=()=>{
    const obj1=document.getElementById("firstRow");
    obj1.remove();
    }
edit1=()=>{
    this.setState(
    { name1: <input type="text"placeholder={this.state.name1} id='name1'/>,
    ariaValue1 : !this.state.ariaValue1
  }
    );
    }
    submit1=()=>{
        if(document.getElementById("name1").value===""){
            alert( "edit fealde is blank ");
       return false;
        }
        this.setState(
        { name1: document.getElementById("name1").value   ,
        ariaValue1 : !this.state.ariaValue1    } 
        );
        }
        delete1=()=>{
          const obj2= document.getElementById("secondRow");
       obj2.remove();
        } 
        edit2=()=>{
            this.setState(
            { name2: <input type="text"placeholder={this.state.name2} id='name2'/>,
            ariaValue2 : !this.state.ariaValue2          }
            );
            }
            submit2=()=>{
                if(document.getElementById("name2").value===""){
                    alert( "edit fealde is blank ");
               return false;
                }
                this.setState(
                { name2: document.getElementById("name2").value  ,
                ariaValue2 : !this.state.ariaValue2          } 
                );
                }
                delete2=()=>{
                const obj3= document.getElementById("therdRow");
                obj3.remove();  
                } 
                edit3=()=>{
                    this.setState(
                    { name3: <input type="text"placeholder={this.state.name3} id='name3'/>,
                    ariaValue3 : !this.state.ariaValue3
                  }
                    );
                    }
                    submit3=()=>{
                        if(document.getElementById("name3").value===""){
                            alert( "edit fealde is blank ");
                       return false;
                        }
                        this.setState(
                        { name3: document.getElementById("name3").value ,
                        ariaValue3 : !this.state.ariaValue3                  } 
                        );
                        }
                        delete3=()=>{
                            const obj4= document.getElementById("forthRow");
                            obj4.remove();
                        } 
render(){
return(
<div>
<table>
<caption> welcom to first state program </caption>
<tbody> 
<tr>
<th> "name"</th>
<th> "edit feeld </th>
<th> " submit button" </th>
<th> delete </th>
</tr>
<tr id='firstRow'>
<td>{ this.state.name }</td>
<td> <button type="button" onClick={this.clickMe}> edit    </button> </td>
<td> <button type="button" disabled={this.state.ariaValue} aria-disabled={this.state.ariaValue} onClick={this.clickMe1}> submit</button> </td>
<td> <button type='button' onClick={this.delete}>delete</button></td>
</tr>
<tr id='secondRow'>
<td>{ this.state.name1}</td>
<td> <button type="button" onClick={this.edit1}> edit    </button> </td>
<td> <button type="button" disabled={this.state.ariaValue1} aria-disabled={this.state.ariaValue1} onClick={this.submit1}> submit</button> </td>
<td> <button type='button' onClick={this.delete1}>delete</button></td>
</tr>
<tr id='therdRow'>
<td>{ this.state.name2 }</td>
<td> <button type="button" onClick={this.edit2}> edit    </button> </td>
<td> <button type="button" disabled={this.state.ariaValue2} aria-disabled={this.state.ariaValue2}  onClick={this.submit2}> submit</button> </td>
<td> <button type='button'onClick={this.delete2}>delete</button></td>
</tr>
<tr id='forthRow'>
<td>{ this.state.name3 }</td>
<td> <button type="button" onClick={this.edit3}> edit    </button> </td>
<td> <button type="button" disabled={this.state.ariaValue3}  aria-disabled={this.state.ariaValue3} onClick={this.submit3}> submit</button> </td>
<td> <button type='button' onClick={this.delete3}>delete</button></td>
</tr>
</tbody>
</table>
</div>
);
}
}
export default Table;