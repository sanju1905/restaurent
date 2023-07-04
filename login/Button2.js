import { useState } from "react";

/*
import React, { useState } from 'react';
function Button2(props){
    const [title,setTitle]=useState("sanjayKandula")
    return(
  
    <button onClick={()=> setTitle("Updated value")}>{title}</button>
    )
}
export default  Button2 ;
*/
const Appp=()=>
{
    const [data,setData]=useState
    (
        {
            usernamee:'',
            rollnumber:'',
            email:''
        }
    )
    const {username,rollnumber,email}=data;
    const handler=e=>
    {
        setData({...data,[e.target.name]:[e.target.value]});
    }
    const submit=e=>
    {
        e.preventDefault();
        alert("Data not Found");
        console.log(data)
    }
   return(
     <div>
         <form onSubmit={}>
             <input type="text" value={username} name="username" onChange={handler} placeholder="name"/>
             <input type="password" value={password} name="password" onChange={handler}/>
             <input type="submit" name="submit" />
         </form>
     </div>
   )
}
export default Appp;