import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
const UserForm = props => {
  return (
    <form>
      <div>
        <label>Имя</label>
        <div>
          <Field name="username" type="text" placeholder="Введите имя пользователя" component={renderField} />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" type="email" placeholder="Введите email пользователя" component={renderField} />
        </div>
      </div>
      <button type="button" onClick={props.addUser}>
        Добавить пользователя
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'userform',
  validate
})(UserForm);
