import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './components/table.component'
import USernameInputField from'./components/logincomponent/login.component'
function App() {
  return (
    <div className="App">
      <USernameInputField></USernameInputField>
    </div>
  );
}

export default App;
