import React from 'react';
import './App.css';
import { AddArea } from './components/AddArea';
import {Complemento} from './components/Complemento'

const App = () => {

  return (
  
    <div className="app">
       <header className="App-header">
        <AddArea />
        <Complemento />
        </header>
      

    </div>
  );
}

export default App;
