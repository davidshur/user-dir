import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EmployeeList from './employeeList';
import Container from 'react-bootstrap/Container';

class EmployeeDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 0,
          name: 'David Shur',
          age: 24,
          hobby: 'Dancing',
        },
        {
          id: 1,
          name: 'Tim Shur',
          age: 22,
          hobby: 'Singing',
        },
        {
          id: 2,
          name: 'Amber Shur',
          age: 24,
          hobby: 'Reading',
        },
      ],
    }
  }

  render() {
    return (
      <Container>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-2"
          >
            <Dropdown.Item>Name</Dropdown.Item>
            <Dropdown.Item>Age</Dropdown.Item>
            <Dropdown.Item>Hobby</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <EmployeeList users={this.state.users} />
      </Container>
    )
  }
}

export default EmployeeDirectory;