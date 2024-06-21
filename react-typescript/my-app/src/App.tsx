import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton'

const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}

export default App;
