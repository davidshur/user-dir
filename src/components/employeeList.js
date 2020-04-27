import React from 'react';
import Table from 'react-bootstrap/Table';

const EmployeeList = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Hobby</th>
      </tr>
    </thead>
    <tbody>
      {props.users.map(user =>
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.hobby}</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default EmployeeList;