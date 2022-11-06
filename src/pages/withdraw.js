import React from 'react';
//import { Form, Button } from 'react-bootstrap';
import {UserContext} from '../components/context';
import Card from '../components/context';
import '../App.css';

function Withdraw(){
  const context = React.useContext(UserContext);
  console.log(isNaN(context.currentUserIndex))

  const [status, setStatus] = React.useState('');
  const [withdrew, setWithdrew] = React.useState (0);
  const [enable, setEnable] = React.useState(false);

  const [profile, setProfile] = React.useState(() => {
    if (context.currentUserIndex === null ) {
    return false;
   } else {
    return true;
   }
   });

   function formSubmit() {
    var numbers = /^[0-9]+./;

   if ( withdrew < 0) {
    setStatus("All withdrawal should be greater than 40")
    setEnable(false)
   } 
    else if (withdrew.match(numbers) || withdrew > 0){
      if (withdrew > context.clients[context.currentUserIndex].balance) {
        setStatus("Your withdrawal cannot be greater than your balance")
        setEnable(false);
        return;
      }
    console.log("Withdrawal successful");
    setStatus ("You have made a successful withdrawal of $" + withdrew);
    context.clients[context.currentUserIndex].balance = context.clients[context.currentUserIndex].balance - Number(withdrew);
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
    <h1>Withdraw</h1>
  )
}
export default Withdraw;
