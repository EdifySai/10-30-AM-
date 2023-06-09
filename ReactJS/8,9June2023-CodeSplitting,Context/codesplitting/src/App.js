import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import Component1 from './Component1';
import { useState } from 'react';
// import Component2 from './Component2';
// import Component3 from './Component3';
const Component2 = React.lazy(() => import('./Component2'));
const Component3 = React.lazy(() => import('./Component3'));


function App() {

  const [counter, setCounter] = useState(10);

  const updateCounter = () => {
    setCounter(counter + 1);
  }

  if (counter == 10) {
    return (
      <div className="App">
        <Component1></Component1>
        <button onClick={updateCounter}>Update Counter</button>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Component2></Component2>
          <Component3></Component3>
        </Suspense>
      </div>
    );
  }
}

export default App;
