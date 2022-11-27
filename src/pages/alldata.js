
import React from 'react'
import ReactDOM from 'react-dom/client'
import {UserContext} from '../components/context' 
//import Card from '../components/context';
import '../App.css'

function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
  <>
    <h5>All Data in Bank</h5>
    <div class = "alldata">
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
    </div>
</>
    
  );
}

export default AllData;