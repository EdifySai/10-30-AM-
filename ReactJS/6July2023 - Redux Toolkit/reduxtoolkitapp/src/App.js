import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter></Counter>
      </Provider>

    </div>
  );
}

export default App;
