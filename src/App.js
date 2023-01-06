import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './Api';



function App() {

    state = {
    events: [],
    locations: []
  }


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  return (
    <div className="App">
      <NumberOfEvents />
      <Event />
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <EventList events={this.state.events} />
    </div>
  );
}



export default App;
