import './App.css';
import React,{useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const Increment = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  }
  const Decrement = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  const Reset = (e)=>{
    setCounter(0);
  }

  return (
    <div className="">
    <div className="app">
      <div className="count_display">
        <h1>{counter}</h1>
      </div>
    </div>
    <div className="btn">
        <button className='btnin' onClick={Increment}>{'+'}</button>
        <button className='btnin' onClick={Decrement}>{'-'}</button>
        <button onClick={Reset}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
