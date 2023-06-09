import logo from './logo.svg';
import './App.css';
import { UserContext } from './UserContext';
import Component1 from './Component1';

function App() {
  var token = "s,jbksbckbsdckbsdkc";
  return (
    <div className="App">

      <UserContext.Provider value={token}>

        <Component1></Component1>

      </UserContext.Provider>

    </div>
  );
}

export default App;
