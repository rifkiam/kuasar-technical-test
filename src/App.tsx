import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesList from './containers/CountriesList';
import CountryCard from './components/CountryCard';
import HeaderSection from './containers/HeaderSection';

function App() {
  
  return (
    <div className="App">
      <HeaderSection />
      <CountriesList />
      {/* <CountryCard /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
