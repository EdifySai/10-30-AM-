import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';



function App() {

  if (localStorage.getItem('counter') == null) {
    localStorage.setItem("counter", 0);
  }
  return (
    <>
      <Navbar></Navbar>
      
    </>
  );
}

export default App;
