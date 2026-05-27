import React from 'react';
import Landing from './Landing';
import Brochure from './Brochure';

function App() {
  const isBrochure = new URLSearchParams(window.location.search).has('brochure');
  return isBrochure ? <Brochure /> : <Landing variation="mono" />;
}

export default App;
