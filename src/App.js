import './App.css';
import { useEffect, useState, createContext } from 'react';
import Component1 from './components/Component1';

export const UserContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('Kazim');

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
        <UserContext.Provider value={user}>
          <Component1/>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
