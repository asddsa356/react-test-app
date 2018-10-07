import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export default class Header extends React.Component {
  render() {
    return (
      <Wrap>
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          Главная
        </NavLink>
        <NavLink
          exact
          to="/users"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          Пользователи
        </NavLink>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  height: 10vh;
  width: 100%;
`;
