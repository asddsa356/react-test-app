import React, { Fragment } from 'react';
import styled from 'styled-components';
export default class UserList extends React.Component {
  deleteUser = id => {
    this.props.deleteUser(id);
  };
  render() {
    const { users } = this.props;
    const listusers = users.map((item, index) => {
      return (
        <li key={index}>
          <Field>Имя:{item.username}</Field>
          <Field>Email:{item.useremail}</Field>
          <button onClick={() => this.deleteUser(index)}>Удалить</button>
        </li>
      );
    });
    return (
      <Fragment>
        <span>Список пользователей</span>
        <ul>{listusers}</ul>
      </Fragment>
    );
  }
}

const Field = styled.span`
  margin: 10px;
`;
