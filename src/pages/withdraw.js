import React from 'react';
import {UserContext} from '../components/context';
import Card from '../components/context';
import '../App.css';

function Withdraw(){
  const ctx = React.useContext(UserContext);
  console.log(isNaN(ctx.currentUserIndex))

  const [status, setStatus]     = React.useState('');
  const [withdrew, setWithdrew] = React.useState (0);
  const [enable, setEnable]     = React.useState(false);

  const [show] = React.useState(() => {
    if (ctx.currentUserIndex === null ) {
    return false;
   } else {
    return true;
   }
   });

   function formSubmit() {
    var numbers = /^[0-9]+./;

   if ( withdrew < 0) {
    setStatus("All withdrawal should be greater than 40")
    setEnable(false);
   } 
    else if (withdrew.match(numbers) || withdrew > 0){
      if (withdrew > ctx.clients[ctx.currentUserIndex].balance) {
        setStatus("Your withdrawal cannot be greater than your balance")
        setEnable(false);
        return;
      }
    console.log("Withdrawal successful");
    setStatus ("You have made a successful withdrawal of $" + withdrew);
    ctx.clients[ctx.currentUserIndex].balance = ctx.clients[ctx.currentUserIndex].balance - Number(withdrew);
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
    <div className="card-success">
    <div></div>
   <Card
      bgcolor="secondary"
      cardstyle="medium"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              <h5>Hello, {ctx.clients[ctx.currentUserIndex].name}</h5>
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
