import React from 'react';
import { UserContext } from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import Card from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';



function Deposit(){
  const ctx = React.useContext(UserContext);

  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState(0);
  const [enable, setEnable]     = React.useState(false);
  
  const [show, setShow]         = React.useState(() => {
    if (ctx.currentUserIndex === null) {
      return false;
    } else {
      return true;
    }
  });

  function formSubmit() {
    var numbers = /^[0-9]+./;
    var timestamp = Date.now()
    var date = new Date(timestamp);

    var eventDate = date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds();
  console.log(eventDate);

  if (deposit <0) {
    setStatus("All deposits should be greater than $0")
    setEnable(false);
  }
   else if (deposit.match(numbers) || deposit > 0) {
    console.log ("deposit is successful");
    setStatus("You have successfully deposited $" + deposit);
    ctx.clients[ctx.currentUserIndex].balance = ctx.clients[ctx.currentUserIndex].balance + Number(deposit);
    ctx.clients[ctx.currentUserIndex].history.unshift({action:"Deposit", amount: deposit, balance: ctx.clients[ctx.currentUserIndex].balance, eventDate})
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
      <div className="centerGrid">
      <div></div>
     <Card
        bgcolor="secondary"
        carddesign="medium"
        header="Deposit"
        status={status}
        body={ show ? (  
                <>
                <h4>Hello, {ctx.clients[ctx.currentUserIndex].name}</h4>
                <h6>Your current balance is: ${ctx.clients[ctx.currentUserIndex].balance}</h6>
                Deposit<br/>
                <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} outStandingBalance={b => outStandingBalance(b)}/><br/>
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