import React from 'react';
import Landing from './Landing';
import Brochure from './Brochure';
import BrochureDev from './BrochureDev';

function App() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('dev')) return <BrochureDev />;
  if (params.has('brochure')) return <Brochure />;
  return <Landing variation="mono" />;
}

export default App;
