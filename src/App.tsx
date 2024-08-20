import React, { useState } from 'react';
import './App.css';
import CountriesList from './containers/CountriesList';
import HeaderSection from './containers/HeaderSection';
import SearchBar from './components/SearchBar';

function App() {
  
  const [search, setSearch] = useState<string | null>(null)

  return (
    <div className="App">
      <HeaderSection />
      <SearchBar setSearch={setSearch}/>
      <CountriesList searchString={search}/>
    </div>
  );
}

export default App;
