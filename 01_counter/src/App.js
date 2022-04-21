import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
