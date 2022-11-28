import React from 'react';
import { UserContext } from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import Card from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';

function Withdraw(){
  const ctx = React.useContext(UserContext);
  console.log(isNaN(ctx.currentUserIndex))

  const [status, setStatus]     = React.useState('');
  const [withdrew, setWithdrew] = React.useState (0);
  const [enable, setEnable]     = React.useState(false);

  const [show, setShow] = React.useState(() => {
    if (ctx.currentUserIndex === null ) {
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

   if ( withdrew < 0) {
    setStatus("All withdrawal should be greater than $0")
    setEnable(false);
   } 
    else if (withdrew.match(numbers) || withdrew > 0){
      if (withdrew > ctx.clients[ctx.currentUserIndex].balance) {
        setStatus("Your withdrawal cannot be greater than your account balance")
        setEnable(false);
        return;
      }
    console.log("Withdrawal successful");
    setStatus ("You have made a successful withdrawal of $" + withdrew);
    ctx.clients[ctx.currentUserIndex].balance = ctx.clients[ctx.currentUserIndex].balance - Number(withdrew);
    ctx.clients[ctx.currentUserIndex].history.unshift({action:"Withdrew", amount: withdrew, balance: ctx.clients[ctx.currentUserIndex].balance, eventDate})
    setEnable(false);
    setWithdrew(0);
    }  else {
      setStatus("Must input valid number")
      setEnable(false);
    }
  }

  function outStandingBalance(b) {
    setEnable (true);
    setWithdrew (b.currentTarget.value);
  }
  

  return (
    <div className="centerGrid">
    <div></div>
   <Card
      bgcolor="secondary"
      carddesign="medium"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              <h4>Hello, {ctx.clients[ctx.currentUserIndex].name}</h4>
              <h6>Your current balance is: ${ctx.clients[ctx.currentUserIndex].balance}</h6>
              Withdrawal<br/>
              <input type="number" className="form-control" id="withdrew" placeholder="Enter amount to withdrew" value={withdrew} onChange={b => outStandingBalance(b)}/><br/>
              <button type="submit" disabled={!enable} className="btn btn-light" onClick={formSubmit}>Withdrew</button>
              </>
            ):(
              <>
              <h5>Please Refresh to make another withdrawal</h5>
              </>
            )}
    />
    <div></div>
    </div>
  )
}
export default Withdraw;
