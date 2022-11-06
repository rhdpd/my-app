import React from 'react';
import {UserContext} from '../components/context';
import Card from '../components/context';
import '../App.css'


function Deposit(){
  const context = React.useContext(UserContext);

  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState(0);
  const [enable, setEnable] = React.useState(false);

  const [display, setDisplay] = React.useState(() => {
    if(context.currentUserIndex === null ) {
      return false;
    }  else {
       return true;
    }
  });

  function formSubmit() {
    var numbers = /^[0-9]+./;

  if (deposit <0) {
    setStatus("All deposits should be greater than $0")
    setEnable(false);
  }
   else if (deposit.match(numbers) || deposit >0) {
    console.log ("deposit is successful");
    setStatus("You have successfully deposited $" + deposit);
    context.clients[context.currentUserIndex].balance = context.clientsp[context.currentUserIndex].balance + Number(deposit);
    setEnable(false);
    setDeposit(0);
   } else {
    setStatus("Must input valid number")
    setEnable(false);
  }
}

function outStandingBalance(b) {
  setEnable (true);
  setWithdrew (b.currentTarget.value);
}
  return (
    <h1>Deposit</h1>
  )
}
export default Deposit;