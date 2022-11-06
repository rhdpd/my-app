import React from 'react';
import {UserContext} from '../components/context';
import Card from '../components/context';
import '../App.css';

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enable, setEnable]     = React.useState(false);
  const cxt = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        //setStatus('Error: ' + label);
        //setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name')) { 
      setStatus("Please enter a name");
      return; 
    }
    if (!validate(email,    'email') || !email.includes ('@')){
      setStatus("Please enter an email address");
      return; 
    }   
    if (!validate(password, 'password') || !password.length < 6) {
      setStatus("Please enter password with 6+ characters");
      return; 
    } 

    cxt.clients.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setEnable(false);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

export default CreateAccount;