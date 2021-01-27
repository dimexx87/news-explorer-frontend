import { BASE_URL_API } from './constants';
import { setToken, setId } from './token';

export const register = (email, password, name) => fetch(`${BASE_URL_API}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    password,
    email,
    name,
  }),
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    return response;
  })
  .then((res) => res)
  .catch((err) => {
    // eslint-disable-next-line
    console.log('err', err);
  });

export const authorize = (email, password) => fetch(`${BASE_URL_API}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
})
  .then((response) => response.json())
  // eslint-disable-next-line consistent-return
  .then((data) => {
    if (data.token) {
      setToken(data.token);
      setId(data._id);
      return data;
    }
  })
  // eslint-disable-next-line
  .catch((err) => console.log(err));

export const getContent = (token) => fetch(`${BASE_URL_API}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then((res) => res.json());
