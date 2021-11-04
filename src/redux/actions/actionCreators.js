import { SET_MOVIES } from "./actionTypes";

const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });

export {
    setMovies,
};
