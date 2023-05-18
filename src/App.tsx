import React from 'react';
import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import LeadFormComponent from './LeadFormComponent';

const url = `http://jsonplaceholder.typicode.com/posts`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          updated
        </p>
        <p>
        <LeadFormComponent />
        </p>
      </header>
    </div>
  );
}

export default App;
