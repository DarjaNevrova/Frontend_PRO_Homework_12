import React from 'react';
import AddDays from '../AddDays';
import AddedCards from '../AddedCards';

import { useSelector } from 'react-redux';

function App() {
  const days = useSelector(state => state.days);

  return (
    <div>
      <AddDays />
      {
        days.map(day => (
          <AddedCards key={day.id} day={day} />))
      }
    </div>
  );
}

export default App;
