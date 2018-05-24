import axios from 'axios';

const API_KEY=''
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_CITY = 'FETCH_CITY';

export function fetchCity(search_term) {
  const url = `${ROOT_URL}&q=${search_term},us`;
  const request = axios.get(url);

  return {
    type: FETCH_CITY,
    payload: request
  }
}
