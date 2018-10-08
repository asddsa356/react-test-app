import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export default class Header extends React.Component {
  render() {
    return (
      <Wrap>
        <Item>
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
        </Item>
        <Item>
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
        </Item>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  height: 10vh;
  width: 100%;
`;
const Item = styled.span`
  margin: 10px;
`;
