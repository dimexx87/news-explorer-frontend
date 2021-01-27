const TOKEN_KEY = 'jwt';
const ID = 'id';
const NEWS = 'news';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const setId = (id) => {
  localStorage.setItem(ID, id);
};

export const setNews = (news) => {
  localStorage.setItem(NEWS, JSON.stringify(news));
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getId = () => localStorage.getItem(ID);
export const getNews = () => JSON.parse(localStorage.getItem(NEWS));

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
