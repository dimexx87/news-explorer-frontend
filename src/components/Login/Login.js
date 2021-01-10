import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    const { email, password, name } = values;
    props.onAddPlace({
      email,
      password,
    });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Необходимо заполнить')
      .email('Неправильный формат электронной почты')
      .min(2, 'Должно содержать минимум 2 символа')
      .max(15, 'Должно содержать максимум 15 символов'),
    password: Yup.string()
      .required('Необходимо заполнить')
      .min(8, 'Должно содержать минимум 8 символов'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  React.useEffect(() => {
    formik.values.email = '';
    formik.values.password = '';
    formik.touched.email = false;
    formik.touched.password = false;
    formik.isValid = true;
  // eslint-disable-next-line
  }, [props.isOpen]);

  return (

    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={formik.handleSubmit}
      name={'loginForm'}
      title={'Вход'}
      buttonText={'Войти'}
      spanText={'Зарегистрироваться'}
      disabled={!formik.isValid}
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
