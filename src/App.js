import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';

function App() {
  return (
    <div className="App">
      <Event />
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
