//Overall import for React app
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContext } from './components/context';
import { HashRouter, Routes, Route } from 'react-router-dom'
//import reportWebVitals from './reportWebVitals';

//various navigation import
import Home from './pages/home';
import CreateAccount from './pages/createaccount';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import AllData from './pages/alldata';

function Spa() {
  return (
    <HashRouter>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/createaccount/" element={<CreateAccount />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
        </Route>
        </Routes>
      </UserContext.Provider>      
    </HashRouter>
  );
}

// ReactDOM.render(
//   <Spa/>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
