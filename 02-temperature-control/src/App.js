import {useState} from 'react';

function App() {

    const [temp, setTemp] = useState(25);
    const [tempColor, setTempColor] = useState('cold');

    const incTemp = () => {
        if( temp === 35) return;
        const newTemp = temp + 1;
        setTemp(newTemp);

        if (newTemp >= 28){
            setTempColor('hot');
        }
    }

    const decTemp = () => {
        if( temp === 15) return;
        const newTemp = temp - 1;
        setTemp(newTemp);

        if (newTemp <= 26){
            setTempColor('cold');
        }
    }


  return (
    <div className="App">
      <h2>Temperature Control App</h2>
        <div className={`temp-display ${tempColor}`}>{temp} ˚C</div>
        <div className='btn-container'>
            <button onClick={() => decTemp()}>-</button>
            <button onClick={() => incTemp()}>+</button>
        </div>

    </div>
  );
}

export default App;
