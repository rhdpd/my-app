import React from 'react'
import {UserContext} from '../components/context'
import Card from '../components/context'
import '../App.css'


function Deposit(){
  const ctx = React.useContext(UserContext);

  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState(0);
  const [enable, setEnable]     = React.useState(false);
  const [show]                  = React.useState('')

  function formSubmit() {
    var numbers = /^[0-9]+./;

  if (deposit <0) {
    setStatus("All deposits should be greater than $0")
    setEnable(false);
  }
   else if (deposit.match(numbers) || deposit > 0) {
    console.log ("deposit is successful");
    setStatus("You have successfully deposited $" + deposit);
    ctx.clients[ctx.currentUserIndex].balance = ctx.clients[ctx.currentUserIndex].balance + Number(deposit);
    setEnable(false);
    setDeposit(0);
   } else {
    setStatus("Must input valid number");
    setEnable(false);
  }
}

function outStandingBalance(b) {
  setEnable (true);
  setDeposit(b.currentTarget.value);
}
  return (
      <div className="card-success">
      <div></div>
     <Card
        bgcolor="secondary"
        cardstyle="medium"
        header="Deposit"
        status={status}
        body={ show ? (  
                <>
                <h5>Hello, {ctx.clients[ctx.currentUserIndex].name}</h5>
                <h6>Your current balance is: ${ctx.clients[ctx.currentUserIndex].balance}</h6>
                Deposit<br/>
                <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={b => outStandingBalance(b)}/><br/>
                <button type="submit" disabled={!enable} className="btn btn-light" onClick={formSubmit}>Make Deposit</button>
                </>
              ):(
                <>
                <h5>Refresh to make another Deposit</h5>
                </>
              )}
      />
      <div></div>
      </div>
  )
}
export default Deposit;