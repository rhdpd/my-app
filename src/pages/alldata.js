
import React from 'react';
import {UserContext} from '../components/context';
import {Table} from 'react-bootstrap';
import Card from '../components/context';
import '../App.css';

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
  <>
    <h5>All Data in Store</h5>
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
          {clients.map((clients,index) => (
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
