import React from 'react';

import './App.css';
import Home from './components/Home';
import Person from './components/Person';
import ErrorBoundary from './error-boundaries/ErrorBoundary';

function App() {
  return (
    <>
    <ErrorBoundary>
     <Home/>
    </ErrorBoundary>
    <ErrorBoundary>
     <Person userName = 'Dimple'/>
     </ErrorBoundary>
    <ErrorBoundary>
     <Person userName = 'Dimpl'/>
     </ErrorBoundary>
    </>
  );
}

export default App;
