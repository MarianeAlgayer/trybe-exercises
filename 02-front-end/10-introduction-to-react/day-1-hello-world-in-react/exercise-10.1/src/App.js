import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrOfTasks = ['Tomar café', 'Caminhar', 'Estudar']

class App extends React.Component {
  render() {
    return (
      <ul>
        {arrOfTasks.map((task) => Task(task))}
      </ul>
    );
  }
}

export default App;
