import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';

const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={placeholder} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
const UserForm = props => {
  return (
    <form>
      <div>
        <Field name="username" type="text" placeholder="Введите имя пользователя" label="Имя" component={renderField} />
      </div>
      <div>
        <Field
          name="email"
          type="email"
          placeholder="Введите email пользователя"
          label="Email"
          component={renderField}
        />
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
