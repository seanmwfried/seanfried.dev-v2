import React from 'react';
import SiteContainer from './components/SiteContainer/SiteContainer';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <SiteContainer/>
    </BrowserRouter>
  );
}

export default App;
