import React from 'react';
import { UserContext } from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import Card from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enable, setEnable]     = React.useState(false);

  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        return false;
      }
      return true;
  }

  function formRegister(){
    console.log(name,email,password);
    var timestamp = Date.now()
    var date = new Date(timestamp);

    var eventDate = date.getDate()+
      "/"+(date.getMonth()+1)+
      "/"+date.getFullYear()+
      " "+date.getHours()+
      ":"+date.getMinutes()+
      ":"+date.getSeconds();
    console.log(eventDate);

    if (!validate(name, 'name')) { 
      setStatus("Please enter a name");
      return; 
    }
    if (!validate(email, 'email') || !email.includes ('@')){
      setStatus("Please enter valid email address");
      return; 
    }   
    if (!validate(password, 'password') || password.length < 6) {
      setStatus("Please enter password with 6+ characters");
      return; 
    } 

    ctx.clients.push({name,email,password,balance:100, history: [{action:"Initial", amount: 100, balance: ctx.clients[ctx.users.length -1].balance, eventDate}]});
    setStatus("")
    setShow(false);
  }    

  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setEnable(false);
  }
  
  function outStandingBalance (b, field) {
    if (field === "name") {
      setName(b.currentTarget.value)
      setEnable(true);
    }
    if (field  === "email") {
      setEmail(b.currentTarget.value)
      setEnable(true);
    }
    if (field === "password") {
      setPassword(b.currentTarget.value)
      setEnable(true);
    }
  }

  return (
    <div className = "centerGrid">
      <div></div>
    
    <Card
      bgcolor="secondary"
      carddesign="medium"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} outStandingBalance = {b => setName(b.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} outStandingBalance={b => setEmail(b.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} outStandingBalance={b => setPassword(b.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={formRegister}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
              />
              <div></div>
      </div>
      
  )
}

export default CreateAccount;