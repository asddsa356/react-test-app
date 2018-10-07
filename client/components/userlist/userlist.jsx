import React, { Fragment } from 'react';

export default class UserList extends React.Component {
  deleteUser = id => {
    this.props.deleteUser(id);
  };
  render() {
    const { users } = this.props;
    const listusers = users.map((item, index) => {
      return (
        <li key={index}>
          <span>Имя:{item.username}</span>
          <span>Email:{item.useremail}</span>
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
