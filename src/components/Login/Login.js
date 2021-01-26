import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { authorize } from '../../utils/auth';
import { setToken } from '../../utils/token';

function Login(props) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    authorize(email, password)
      .then((data) => {
        if (!data) {
          setMessage('Проверьте адрес электронной почты и пароль');
          setError(true);
        }
        if (data.token) {
          setToken(data.token);
          props.onLogged(true);
          history.push('/');
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Необходимо заполнить')
      .email('Неправильный формат электронной почты')
      .min(2, 'Должно содержать минимум 2 символа')
      .max(20, 'Должно содержать максимум 15 символов'),
    password: Yup.string()
      .required('Необходимо заполнить')
      .min(8, 'Должно содержать минимум 8 символов'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    formik.values.email = '';
    formik.values.password = '';
    formik.touched.email = false;
    formik.touched.password = false;
    formik.isValid = false;
  }, [props.isOpen]);

  return (

    <PopupWithForm
      isOpen={props.isOpen}
      isRegOpen={props.isRegOpen}
      onRegister={props.onRegister}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={formik.handleSubmit}
      name={'loginForm'}
      title={'Вход'}
      buttonText={'Войти'}
      spanText={'Зарегистрироваться'}
      disabled={!(formik.dirty && formik.isValid)}
      error={error}
      message={message}
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

        </>
      }
    </PopupWithForm>
  );
}

export default Login;
