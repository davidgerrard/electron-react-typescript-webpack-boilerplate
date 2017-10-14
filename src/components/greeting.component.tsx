import React from 'react';

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + ' ' + user.lastName;
}

const user: User = {
  firstName: 'Dave',
  lastName: 'Gerrard'
};

export default class Greeting extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );
  }
}
