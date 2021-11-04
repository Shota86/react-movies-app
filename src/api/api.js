import axios from "axios";

import { MAIN_URL, ROUTES } from "../utils/url-utils";

const instance = axios.create({
  withCredentials: false,
  baseURL: MAIN_URL,
});

const moviesAPI = {
  getMovies(offset=0, limit=10, sortBy="release_date", filter="") {
    return instance
      .get(`${ROUTES.MOVIES}?filter=${filter}&sortBy=${sortBy}&sortOrder=desc&offset=${offset}&limit=${limit}`)
      .then((response) => response.data);
  },
  getMovieById(id) {
    return instance
    .get(`${ROUTES.MOVIE}${id}`)
    .then((response) => response.data);
  }
};

export default moviesAPI;
