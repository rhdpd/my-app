
import React from 'react';
import { UserContext } from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import Card from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';

function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
    <div className="allmybankdata">
    <Card
      bgcolor="secondary"
      carddesign="big"
      header="All Bad Bank Data"
      width="50rem"
      body = {

      <table class ="badBankTable">
        <thead>
           <tr> 
            <th>Email</th>
            <th>Name</th>
            <th>Password</th>
           </tr>
        </thead>
        <tbody>
          {ctx.clients.map((clients,index) => (
            <tr key={index}>
           <td> {clients.name} </td>
           <td> {clients.email} </td>
           <td> {clients.password} </td>
           </tr>
          ))}
        </tbody>
      </table>
      }
    />
    </div>
  );
}

export default AllData;