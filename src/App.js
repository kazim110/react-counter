import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>You Clicked {count} time.</h1>
        <br />
        <button onClick={() => setCount(count + 10)}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
