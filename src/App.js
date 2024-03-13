import React, { useState } from 'react';
import './App.css';
import whitelist from './whitelist.json'; // Import whitelist from JSON file
import ogList from './oglist.json'; // Import OG list from JSON file
import seiPepeLogo from './sei-pepe-logo.png'; // Import project logo

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [result, setResult] = useState('');

  const checkWallet = () => {
    const trimmedAddress = walletAddress.trim().toLowerCase(); // Remove leading and trailing whitespaces and convert to lowercase
    
    const isInWhitelist = whitelist.some(address => address.toLowerCase() === trimmedAddress);
    const isInOGList = ogList.some(address => address.toLowerCase() === trimmedAddress);

    if (isInWhitelist && isInOGList) {
      setResult('Wallet is in OG list');
    } else if (isInWhitelist) {
      setResult('Wallet is in whitelist');
    } else if (isInOGList) {
      setResult('Wallet is in OG list');
    } else {
      setResult('Wallet is not in whitelist or OG list');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src={seiPepeLogo} alt="SEI Pepe Logo" className="logo" />
        <h1 className="title">Wallet Checker</h1>
      </div>
      <div className="content">
        <input
          type="text"
          placeholder="Enter Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="input"
        />
        <button onClick={checkWallet} className="button">Check</button>
        <p className="result">{result}</p>
      </div>
    </div>
  );
}

export default App;
