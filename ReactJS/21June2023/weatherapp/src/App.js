import logo from './logo.svg';
import './App.css';
import Weather from './containers/Weather';
import TempDetails from './containers/TempDetails';

function App() {
  return (
    <div className="App">

      <Weather></Weather>
      <TempDetails></TempDetails>

    </div>
  );
}

export default App;
