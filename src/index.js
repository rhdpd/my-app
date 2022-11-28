
//Overall import for React app
import  React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/index.css';
import App from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';

//import reportWebVitals from './reportWebVitals';


//various navigation import
import Home from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/pages/home';
import CreateAccount from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/pages/createaccount';
import Deposit from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/pages/deposit';
import Withdraw from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/pages/withdraw';
import AllData from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/pages/alldata';


function Spa(){
  var timestamp = Date.now()
  var date = new Date(timestamp);

  var eventDate = date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds();
  console.log(eventDate);
  console.log("it works!")

    return (
    <HashRouter>
      <div className="App">
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <Routes>
        <Route path= "/" element={<App />} >
          <Route index element={<Home />} />
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
};

// const container = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.hydrateRoot(<App name="/Spa"/>);

const rootElement = document.getElementById('root');
const container = createRoot(rootElement);

container.render(<Spa/>);
container.unmount();

// ReactDOM.createRoot(
//   <React.StrictMode>
//   <Spa/>,
//   </React.StrictMode>,
//   document.getElementById('root'));


