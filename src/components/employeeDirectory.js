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
      sortType: 'Descending IDs',
      filterType: 'Name',
      filteredUsers: [
        {
          id: '0',
          name: 'David Shur',
          age: '24',
          hobby: 'Dancing',
        },
        {
          id: '1',
          name: 'Tim Shur',
          age: '22',
          hobby: 'Singing',
        },
        {
          id: '2',
          name: 'Amber Shur',
          age: '24',
          hobby: 'Reading',
        },
      ],
      users: [
        {
          id: '0',
          name: 'David Shur',
          age: '24',
          hobby: 'Dancing',
        },
        {
          id: '1',
          name: 'Tim Shur',
          age: '22',
          hobby: 'Singing',
        },
        {
          id: '2',
          name: 'Amber Shur',
          age: '24',
          hobby: 'Reading',
        },
      ],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let currentList = [];
    let newList = [];

    if (event.target.value !== '') {
      if (this.state.filterType === 'ID') {
        currentList = this.state.users;
        newList = currentList.filter(item => item.id.toLowerCase().includes(event.target.value.toLowerCase()));
      } else if (this.state.filterType === 'Name') {
        currentList = this.state.users;
        newList = currentList.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
      } else if (this.state.filterType === 'Age') {
        currentList = this.state.users;
        newList = currentList.filter(item => item.age.toLowerCase().includes(event.target.value.toLowerCase()));
      } else if (this.state.filterType === 'Hobby') {
        currentList = this.state.users;
        newList = currentList.filter(item => item.hobby.toLowerCase().includes(event.target.value.toLowerCase()));
      }
    } else {
      newList = this.state.users;
    }
    this.setState({filteredUsers: newList});
  }

  render() {
    return (
      <Container>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={this.handleChange}
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title={this.state.filterType}
            id="input-group-dropdown-2"
          >
            <Dropdown.Item onClick={() => this.setState({filterType: 'ID'})}>ID</Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({filterType: 'Name'})}>Name</Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({filterType: 'Age'})}>Age</Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({filterType: 'Hobby'})}>Hobby</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <EmployeeList users={this.state.sortType === "Ascending IDs" ? this.state.filteredUsers.reverse() : this.state.filteredUsers} />
      </Container>
    );
  }
}

export default EmployeeDirectory;