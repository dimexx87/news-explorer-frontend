import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { register } from '../../utils/auth';

function Register(props) {
  const initialValues = {
    email: '',
    password: '',
    name: '',
  };
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const onSubmit = (values) => {
    const { email, password, name } = values;
    register(email, password, name).then((res) => {
      if (res.status !== 400) {
        props.handleInfoTooltip(true);
        history.push('/info');
      } else {
        setMessage('Такой пользователь уже существует');
        setError(true);
      }
    });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Необходимо заполнить')
      .email('Неправильный формат электронной почты')
      .min(2, 'Должно содержать минимум 2 символа')
      .max(20, 'Должно содержать максимум 20 символов'),
    password: Yup.string()
      .required('Необходимо заполнить')
      .min(8, 'Должно содержать минимум 8 символов'),
    name: Yup.string()
      .required('Необходимо заполнить')
      .min(2, 'Должно содержать минимум 2 символа'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  React.useEffect(() => {
    formik.isValid = false;
    formik.values.email = '';
    formik.values.password = '';
    formik.values.name = '';
    formik.touched.email = false;
    formik.touched.password = false;
    formik.touched.name = false;
    // eslint-disable-next-line
  }, [props.isOpen]);

  return (
    <PopupWithForm
      onLogin={props.onLogin}
      isOpen={props.isOpen}
      isRegOpen={props.isRegOpen}
      onClose={props.onClose}
      onSubmit={formik.handleSubmit}
      onRegister={props.onRegister}
      onLogin={props.onLogin}
      name={'registerForm'}
      title={'Регистрация'}
      buttonText={'Зарегистрироваться'}
      spanText={'Войти'}
      disabled={!(formik.dirty && formik.isValid)}
      error={error}
      message={message}
      isInfoTooltipPopupOpen={props.isInfoTooltipPopupOpen}
    >
      {
        <>
          <div className="popup__field">
            <span className="popup__subtitle">Email</span>
            <input
              placeholder="введите Email"
              className="popup__text"
              name="email"
              type="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="popup__input-error">
                {formik.errors.email}
              </span>
            ) : null}
          </div>

          <div className="popup__field">
            <span className="popup__subtitle">Пароль</span>
            <input
              placeholder="введите пароль"
              className="popup__text"
              name="password"
              type="password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="popup__input-error">
                {formik.errors.password}
              </span>
            ) : null}
          </div>

          <div className="popup__field">
            <span className="popup__subtitle">Имя</span>
            <input
              placeholder="введите своё имя"
              className="popup__text"
              name="name"
              type="text"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="popup__input-error">
                {formik.errors.name}
              </span>
            ) : null}
          </div>
        </>
      }
    </PopupWithForm>
  );
}

export default Register;
