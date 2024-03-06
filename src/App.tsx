import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.scss';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <div className="App">
      <div><Toaster  position="top-right" /></div>
      <Tabs></Tabs>
    </div>
  );
}

export default App;
