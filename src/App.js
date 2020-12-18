import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Loading />
    </main>
  );
}

export default App;
