const validate = values => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'Обязателен';
  } else if (values.get('username').length > 10) {
    errors.username = 'Должен быть не более 10 символов';
  }
  if (!values.get('email')) {
    errors.email = 'Обязателен';
  } else if (values.get('email').length > 10) {
    errors.email = 'Должен быть не более 10 символов';
  }

  return errors;
};

export default validate;
