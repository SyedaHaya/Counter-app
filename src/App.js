import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
     
    </div>
  );
};
function Counter(){
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);    
  const decrease = () => setCount(count - 1);  
  const reSet = () => setCount(0);




  //console.log(count);
  return(
    <div className="card-1">
        <h2>Counter App</h2>
        <h2>{count} </h2>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reSet}>Reset</button>


    </div>
  )
}

export default App;
