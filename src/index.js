//Overall import for React app
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import { UserContext } from './components/context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//import reportWebVitals from './reportWebVitals';

//various navigation import
import Home from './pages/home';
import CreateAccount from './pages/createaccount';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import AllData from './pages/alldata';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
function App(){
    return (
    <HashRouter>
      <div className="App">
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <Routes>
        <Route path="/" element={<App />} >
          <Route element={<Home />} />
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="alldata" element={<AllData />} />
        </Route>
        </Routes>
      </UserContext.Provider> 
      </div>     
    </HashRouter>
  );


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


//   <React.StrictMode>
//     <Spa/>
//   </React.StrictMode>
// );


