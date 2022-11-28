
// eslint-disable-next-line 
import logo from "./logo.svg";
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/index.css';
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';
import NavBar from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    
    <div>
      <NavBar />
      <br/>
      <div className="centered">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
