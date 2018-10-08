import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addUser, deleteUser } from '../actions/user';
import UserList from '../components/userlist/userlist';
import UserForm from '../components/userform/userform';
class UsersPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Item>
          <UserForm addUser={this.props.addUser} />
        </Item>
        <Item>
          <UserList deleteUser={this.props.deleteUser} users={this.props.userlist} />
        </Item>
      </Fragment>
    );
  }
}
const mapDispatchtoProps = dispatch => bindActionCreators({ addUser, deleteUser }, dispatch);
const mapStateToProps = state => ({
  userlist: state.get('user')
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(UsersPage);

const Item = styled.div`
  margin: 10px;
`;
