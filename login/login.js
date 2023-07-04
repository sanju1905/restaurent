import React,{useState} from 'react' 
      
const App=()=> {
  const [data,setData]=useState(
    {
      username:'',
      password:'',
      email:''
    })
    const {username,password,email}= data;
    const handler=e =>
    {
      setData({...data,[e.target.name]:[e.target.value]});
    }
  const Submit=e=>
  {
    e.preventDefault();
    alert("Data Submited ");
    alert(data);
  }

  return (
   <div>
     <center>
       <form onSubmit={Submit}
>
   <h2>Form</h2>
  <label>Name: </label>
        <input type="text" value={username} name="username" onChange={handler} placeholder="Name"/><br />
        <label>Password: </label>
        <input type="password" value={password} name="password" onChange={handler} /><br />
        <label>Email: </label>
        <input type="text" value={email} name="email" onChange={handler} /><br />
        <input type="submit" name="submit" />

        </form>
     </center>
   </div>
      
    )
  
}

export default App