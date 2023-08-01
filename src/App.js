import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [win, setWin] = useState('');
  const [wins, setWins] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

  };

  const HandleChange = (event) => {
    setWin(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (win === '' || selectedOption === '') {
      setErrorMessage('Both fields are required to submit the form.');
    } else {
      setWins([...wins, { id: win.length, win: win, option: selectedOption }]);
      setWin('');
      setSelectedOption('');
      setErrorMessage('');
    }
  };

  return (
    <div>
      <h1>Hello Voters!</h1>
      <form onSubmit={handleSubmit}>
        <lable>
          Name
          <input
            type="text"
            placeholder="Write here"
            value={win}
            onChange={HandleChange}
          />
        </lable>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="india"
            value="INDIA"
            checked={selectedOption === 'INDIA'}
            onChange={handleOptionChange}
          />
          INDIA
        </label>
        <label>
          <input
            type="radio"
            name="nda"
            value="NDA"
            checked={selectedOption === 'NDA'}
            onChange={handleOptionChange}
          />
          NDA
        </label>
        <br />
        <br />
        <button className='btn_click'>Click</button>
      </form>
      {errorMessage && <p className="alert_p">{errorMessage}</p>}
      <div>
        {wins.map((item) => {
          return (
            <div >
            <p className='result' key={item.id}>
              {item.win + ' ' + (item.option ? item.option : '')}
            </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
