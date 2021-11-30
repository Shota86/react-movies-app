import axios from "axios";

import { MAIN_URL, ROUTES } from "../utils/url-utils";

const instance = axios.create({
  withCredentials: false,
  baseURL: MAIN_URL,
});

const moviesAPI = {
  getMovies(offset=0, limit=10, sortBy="release_date", filter="", search="") {
    return instance
      .get(`${ROUTES.MOVIES}?filter=${filter}&sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=title&offset=${offset}&limit=${limit}`)
      .then((response) => response.data);
  },
  getMovieById(id) {
    return instance
    .get(`${ROUTES.MOVIE}${id}`)
    .then((response) => response.data);
  },
  postMovie(movie) {    
    return instance.post(ROUTES.MOVIES, movie);
  },
  putMovie(movie) {    
    return instance.put(ROUTES.MOVIES, movie);
  },
  deleteMovie(id) {
    return instance.delete(`${ROUTES.MOVIES}/${id}`);
  }
};

export default moviesAPI;
