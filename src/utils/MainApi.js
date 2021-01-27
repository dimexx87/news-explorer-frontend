/* eslint-disable function-paren-newline */
/* eslint-disable class-methods-use-this */
// eslint-disable-document
// fetch to YP Api
import dateFormat from 'dateformat';
import {
  BASE_URL_NEWSAPI, API_KEY, PAGE_SIZE, BASE_URL_API, COUNTRY,
} from './constants';

const now = new Date();
const TO = dateFormat(now, 'yyyy-mm-dd');
const FROM = dateFormat(now.setDate(now.getDate() - 7), 'yyyy-mm-dd');

class MainApi {
  constructor({
    url, apiKey, baseApi, to, from, pageSize, country,
  }) {
    this.url = url;
    this.apiKey = apiKey;
    this.baseApi = baseApi;
    this.to = to;
    this.from = from;
    this.pageSize = pageSize;
    // this.country = country;
  }

  getNews(request) {
    return fetch(`${this.url}?q=${request}&from=${this.from}&to=${this.to}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`).then(this._handleResponse);
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  saveArticle(keyword, title, text, date, source, link, image, token) {
    return fetch(`${this.baseApi}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then(this._handleResponse);
  }

  getArticles(token) {
    return fetch(`${this.baseApi}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then(this._handleResponse);
  }

  deleteArticle(articleId, token) {
    return fetch(`${this.baseApi}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  url: BASE_URL_NEWSAPI,
  apiKey: API_KEY,
  baseApi: BASE_URL_API,
  from: FROM,
  to: TO,
  pageSize: PAGE_SIZE,
  country: COUNTRY,
});

export default mainApi;
