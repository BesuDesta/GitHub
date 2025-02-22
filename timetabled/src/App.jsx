import React from 'react';
import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Conneticut</h1>
      <h2>Welcome to Conneticut, Norswalk! Check out this calender to get to know the city and see all the sights during your stay.</h2>
      <Calendar />
    </div>
  )
}

export default App;