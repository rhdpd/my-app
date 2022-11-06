
import React from 'react';
import {UserContext} from '../components/context';
import Card from '../components/context';
import '../App.css';

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
