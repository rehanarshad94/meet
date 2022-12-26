import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';

function App() {
  return (
    <div className="App">
      <NumberOfEvents />
      <Event />
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
