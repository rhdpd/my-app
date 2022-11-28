import Card from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/components/context';
import bankImage from '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/pages/bank.png'
import '/Users/patipatni/Desktop/sandboxMIT/myBadBankApp/src/App.css';

function Home(){
  return (
    <div className="centerGrid">
      <div></div>
    <Card
      bgcolor="secondary"
      txtcolor="black"
      carddesign="medium"
      header="My BadBank Home"
      title="Welcome to the Bad Bank"
      text="You can move around using the navigation bar to start your banking experience. Once you create an account, you can deposit, withdraw. This site is equipped to give you okay banking experience, More to come!"
      body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
    /> 
    <div></div>
    </div>
  
  );  
}

export default Home;