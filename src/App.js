import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import EmployeeDirectory from './components/employeeDirectory';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1 className="text-center">User Directory</h1>
      </Jumbotron>
      <EmployeeDirectory />
    </div>
  );
}

export default App;
